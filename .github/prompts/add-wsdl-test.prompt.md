---
description: "Scaffold a new WSDL test — creates the test file and verifies it follows project conventions"
agent: "agent"
argument-hint: "WSDL filename (e.g., my_service.wsdl)"
---

Given the WSDL file name provided, scaffold a complete test for it:

1. **Verify** the WSDL file exists in `test/resources/`
2. **Determine expected outputs** by reading the WSDL to identify its services, ports, and definitions
3. **Create the test file** in `test/node-soap/` following the exact pattern from existing tests (tape, three-phase: generate → assert files → typecheck)
4. **Run the test** with `npm run test:node-soap` to verify it passes

Use the test-patterns instruction file at `.github/instructions/test-patterns.instructions.md` as the canonical template. The generated folder name is the WSDL target name lowercased with no separators.
