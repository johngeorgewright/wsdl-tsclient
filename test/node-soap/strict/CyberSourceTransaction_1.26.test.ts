import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../../src";
import { Logger } from "../../../src/utils/logger";
import { typecheck } from "../../utils/tsc";

const target = "strict/CyberSourceTransaction_1.26";

describe(target, () => {
    Logger.disabled();

    const input = `./test/resources/${target}.wsdl`;
    const outdir = "./test/generated/strict";

    it(`${target} - generate wsdl client`, async () => {
        await parseAndGenerate(input, outdir);
    });

    // it(`${target} - check definitions`, async () => {
    //     expect(existsSync(`${outdir}/A/definitions/BankSvcRq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/A/definitions/BankSvcRs.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/A/definitions/ARq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/A/definitions/ARs.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/A/definitions/PaymentRq.ts`)).toBe(true);
    //     expect(existsSync(`${outdir}/A/definitions/PaymentRs.ts`)).toBe(true);
    //
    // });

    it(`${target} - compile`, async () => {
        await typecheck(`${outdir}/cybersourcetransaction126/index.ts`);
    });

});