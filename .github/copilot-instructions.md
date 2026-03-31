# Project Guidelines — wsdl-tsclient

WSDL-to-TypeScript client generator. Parses WSDL files via `soap` and emits strongly-typed TypeScript using `ts-morph`.

## Architecture

```
WSDL file → parser.ts (soap) → ParsedWsdl model → generator.ts (ts-morph) → .ts files
```

| Module                      | Role                                                                                               |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| `src/parser.ts`             | Parses WSDL into `ParsedWsdl` model; handles recursive types, array detection, XSD→TS type mapping |
| `src/generator.ts`          | Emits TypeScript files: `definitions/`, `ports/`, `services/`, `client.ts`, `index.ts`             |
| `src/cli.ts`                | CLI entry point via `yargs`; handles globs, options, logging                                       |
| `src/index.ts`              | Public API: `parseAndGenerate()`, `generate()`, `parseWsdl()`                                      |
| `src/models/parsed-wsdl.ts` | Core data model: `ParsedWsdl`, `Service`, `Port`, `Method`, `Definition`, `DefinitionProperty`     |

Key design: `DefinitionProperty` is either `PRIMITIVE` (maps to TS string/number/boolean/Date) or `REFERENCE` (points to another Definition). Circular references are detected via a visited-definitions cache.

## Build and Test

```bash
npm run build          # Compile to ./dist (CommonJS, ES5 target)
npm test               # Run all test suites (pretest cleans generated/)
npm run test:node-soap # Run primary test suite only
npm run lint           # ESLint on ./src
npm run lint:fix       # Auto-fix lint issues
npm run dev            # ts-node development mode
```

Tests use **tape** with **tap-spec** reporter. Pattern: generate from WSDL → assert files exist → typecheck generated output via `tsc`.

## Code Style

-   **Prettier**: 4-space indent, 120-char line width
-   **ESLint**: `eslint:recommended` + `@typescript-eslint/recommended`; `any` is allowed
-   **TypeScript**: Selective strictness (`noImplicitAny`, `strictFunctionTypes`, `noImplicitReturns`) — not full `strict: true`
-   Name collisions resolved by appending incrementing numbers (e.g., `Item`, `Item1`)
-   Reserve-word avoidance via `src/utils/javascript.ts` keyword list

## Conventions

-   Use `Logger` from `src/utils/logger.ts` for output (supports `DEBUG`/`NO_COLOR` env vars)
-   Non-fatal errors are logged, not thrown — generation continues when possible
-   Test files live in `test/node-soap/` with corresponding WSDL in `test/resources/`
-   Generated test output goes to `test/generated/<name>/` (auto-cleaned before test runs)
-   Async/await for all I/O; no callbacks
