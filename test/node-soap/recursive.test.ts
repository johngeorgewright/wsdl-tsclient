import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../src";
import { Logger } from "../../src/utils/logger";

const target = "recursive";

describe(target, () => {
    Logger.disabled();

    const input = `./test/resources/${target}.wsdl`;
    const outdir = "./test/generated";

    it(`${target} - generate wsdl client`, async () => {
        // TODO: Fix this issue
        // await parseAndGenerate(input, outdir);
    });

    it(`${target} - check definitions`, async () => {
        // expect(existsSync(`${outdir}/recursive/definitions/ActivityNameFilter.ts`)).toBe(true);
        // expect(existsSync(`${outdir}/recursive/definitions/TnsparamsGetLeadChanges.ts`)).toBe(true);
        // expect(existsSync(`${outdir}/recursive/definitions/TnssuccessGetLeadChanges.ts`)).toBe(true);
        //
    });

    // it(`${target} - compile`, async () => {
    //     await typecheck(`${outdir}/arraynamespaceoverride/index.ts`);
    // });

});