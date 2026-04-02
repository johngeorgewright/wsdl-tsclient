import { promisify } from "node:util";
import { execFile as execFileCb } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const execFile = promisify(execFileCb);
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const tscPath = path.join(rootDir, "node_modules", ".bin", "tsc");

export async function typecheck(pathToIndex: string) {
    await execFile(
        tscPath,
        [pathToIndex, "--noEmit", "--esModuleInterop", "--ignoreConfig", "--types", "node", "--skipLibCheck"],
        {
            env: process.env,
        }
    );
}
