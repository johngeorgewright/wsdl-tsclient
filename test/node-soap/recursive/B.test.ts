import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../../src";
import { Logger } from "../../../src/utils/logger";
import { typecheck } from "../../utils/tsc";

const target = "recursive/B";

describe(target, () => {
    Logger.disabled();

    const input = `./test/resources/${target}.xsd`;
    const outdir = "./test/generated/recursive";

    it(`${target} - generate wsdl client`, async () => {
        await parseAndGenerate(input, outdir);
    });

    // it(`${target} - check definitions`, async () => {
    //     expect(existsSync(`${outdir}/B/definitions/BankSvcRq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/B/definitions/BankSvcRs.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/B/definitions/BRq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/B/definitions/BRs.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/B/definitions/PaymentRq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/B/definitions/PaymentRs.ts`)).toBe(true);
    //
    // });

    it(`${target} - compile`, async () => {
        await typecheck(`${outdir}/b/index.ts`);
    });

});