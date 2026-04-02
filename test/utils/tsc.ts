import { promisify } from "node:util";
import { exec as execCb } from "node:child_process";

const exec = promisify(execCb);

export async function typecheck(pathToIndex: string) {
    await exec(`tsc ${pathToIndex} --noEmit`, {
        env: process.env,
    });
}
