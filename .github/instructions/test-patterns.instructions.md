---
applyTo: "test/**"
description: "Use when writing or modifying tests for WSDL client generation. Covers the tape test pattern, file assertions, and typecheck validation."
---

# Test Patterns

All tests use **tape** with this three-phase structure:

1. **Generate** — call `parseAndGenerate(input, outdir)` on a WSDL file
2. **Assert files exist** — verify each expected `.ts` file was created
3. **Typecheck** — run `typecheck()` on the generated `index.ts` to confirm valid TypeScript

## Template

```typescript
import test from "tape";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../src";
import { Logger } from "../../src/utils/logger";
import { typecheck } from "../utils/tsc";

const target = "my_service";

test(target, async (t) => {
    Logger.disabled();

    const input = `./test/resources/${target}.wsdl`;
    const outdir = "./test/generated";

    const expectedFiles = [
        "client.ts",
        "index.ts",
        // "definitions/MyType.ts",
        // "ports/MyPort.ts",
        // "services/MyService.ts",
    ];

    t.test(`${target} - generate wsdl client`, async (t) => {
        await parseAndGenerate(input, outdir);
        t.end();
    });

    expectedFiles.forEach((file) => {
        t.test(`${target} - ${file} exists`, async (t) => {
            t.equal(existsSync(`${outdir}/myservice/${file}`), true);
            t.end();
        });
    });

    t.test(`${target} - compile`, async (t) => {
        await typecheck(`${outdir}/myservice/index.ts`);
        t.end();
    });
});
```

## Conventions

-   Test file names use snake_case matching the WSDL: `hello_service.test.ts` → `hello_service.wsdl`
-   WSDL files go in `test/resources/`; tests go in `test/node-soap/`
-   Generated output lands in `test/generated/<name>/` (auto-cleaned by `pretest`)
-   Always call `Logger.disabled()` first to keep test output clean
-   The `outdir` folder name is the WSDL name lowercased with no separators (e.g., `hello_service` → `helloservice`)
