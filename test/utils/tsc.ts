import { promisify } from "node:util";
import { execFile as execFileCb } from "node:child_process";

const execFile = promisify(execFileCb);

export async function typecheck(pathToIndex: string) {
    await execFile("tsc", [pathToIndex, "--noEmit", "--esModuleInterop"], {
        env: process.env,
    });
}
