---
applyTo: "test/**"
description: "Use when writing or modifying tests for WSDL client generation. Covers the vitest test pattern, file assertions, and typecheck validation."
---

# Test Patterns

All tests use **vitest** with this three-phase structure:

1. **Generate** — call `parseAndGenerate(input, outdir)` on a WSDL file
2. **Assert files exist** — verify each expected `.ts` file was created
3. **Typecheck** — run `typecheck()` on the generated `index.ts` to confirm valid TypeScript

## Template

```typescript
import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../src";
import { Logger } from "../../src/utils/logger";
import { typecheck } from "../utils/tsc";

const target = "my_service";

describe(target, () => {
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

    it(`${target} - generate wsdl client`, async () => {
        await parseAndGenerate(input, outdir);
    });

    expectedFiles.forEach((file) => {
        it(`${target} - ${file} exists`, () => {
            expect(existsSync(`${outdir}/myservice/${file}`)).toBe(true);
        });
    });

    it(`${target} - compile`, async () => {
        await typecheck(`${outdir}/myservice/index.ts`);
    });
});
```

## Conventions

-   Test file names use snake_case matching the WSDL: `hello_service.test.ts` → `hello_service.wsdl`
-   WSDL files go in `test/resources/`; tests go in `test/node-soap/`
-   Generated output lands in `test/generated/<name>/` (auto-cleaned by `pretest`)
-   Always call `Logger.disabled()` at the top of the `describe` block to keep test output clean
-   The `outdir` folder name is the WSDL name lowercased with no separators (e.g., `hello_service` → `helloservice`)
