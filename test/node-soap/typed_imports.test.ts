import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "fs";
import { parseAndGenerate } from "../../src";
import { Logger } from "../../src/utils/logger";
import { typecheck } from "../utils/tsc";

const target = "typed_imports";

describe(target, () => {
    Logger.disabled();

    const input = "./test/resources/hello_service.wsdl";
    const outdir = "./test/generated/typedimports";
    const genDir = `${outdir}/helloservice`;

    const expectedFiles = [
        "client.ts",
        "index.ts",
        "definitions/SayHelloRequest.ts",
        "definitions/SayHelloResponse.ts",
        "ports/HelloPort.ts",
        "services/HelloService.ts",
    ];

    it(`${target} - generate wsdl client with typedImports`, async () => {
        await parseAndGenerate(input, outdir, {
            typedImports: true,
        });
    });

    expectedFiles.forEach((file) => {
        it(`${target} - ${file} exists`, () => {
            expect(existsSync(`${genDir}/${file}`)).toBe(true);
        });
    });

    it(`${target} - port file uses import type`, () => {
        const content = readFileSync(`${genDir}/ports/HelloPort.ts`, "utf-8");
        expect(content).toContain("import type {");
    });

    it(`${target} - service file uses import type`, () => {
        const content = readFileSync(`${genDir}/services/HelloService.ts`, "utf-8");
        expect(content).toContain("import type {");
    });

    it(`${target} - client file uses import type for soap types`, () => {
        const content = readFileSync(`${genDir}/client.ts`, "utf-8");
        expect(content).toContain("import type {");
        // createClientAsync should NOT be a type import
        expect(content).toMatch(/import \{[^}]*createClientAsync/);
    });

    it(`${target} - client file uses import type for definitions`, () => {
        const content = readFileSync(`${genDir}/client.ts`, "utf-8");
        // Definition imports in client should be type-only
        const lines = content.split("\n");
        const defImports = lines.filter((l) => l.includes("./definitions/"));
        expect(defImports.length).toBeGreaterThan(0);
        defImports.forEach((line) => {
            expect(line).toMatch(/^import type /);
        });
    });

    it(`${target} - compile`, async () => {
        await typecheck(`${genDir}/index.ts`);
    });
});
