# Changelog

All notable changes to this project will be documented in this file.

## [2.0.1](https://github.com/johngeorgewright/wsdl-tsclient/compare/v2.0.0...v2.0.1) (2026-04-02)


### Documentation

* update README to reflect correct package name and usage ([7c2bf85](https://github.com/johngeorgewright/wsdl-tsclient/commit/7c2bf8564f911bf84b481c21550d0b4ef0233729))


### Maintenance

* **npm:** release to environment ([2cca26e](https://github.com/johngeorgewright/wsdl-tsclient/commit/2cca26e92e7468e3c17c5c25f66bc6d17bc2f3c1))

## [2.0.0](https://github.com/johngeorgewright/wsdl-tsclient/compare/v1.7.1...v2.0.0) (2026-04-02)


### ⚠ BREAKING CHANGES

* new package
* this is now an ESM package.

### Features

* add detailed instructions for WSDL debugging, testing patterns, and scaffolding tests ([1238001](https://github.com/johngeorgewright/wsdl-tsclient/commit/1238001d81cb6611a3e6d173d3280e26dabb742a))
* add esm option ([bde0490](https://github.com/johngeorgewright/wsdl-tsclient/commit/bde049045da8493945f62d373b11c8ca8643e6c6))
* add esmExtension option for ESM imports in CLI and generator ([0179016](https://github.com/johngeorgewright/wsdl-tsclient/commit/017901623e2600cf816a408d5f19953118e7b97c))
* add typedImports option for type-only imports and implement related tests ([534c0b7](https://github.com/johngeorgewright/wsdl-tsclient/commit/534c0b7e0c3b36c63bd8af9c5ddbb837ec5086cd))
* array enums ([7b58704](https://github.com/johngeorgewright/wsdl-tsclient/commit/7b58704637b596765d0dd200bda13a61b7fa7cbb))
* array enums ([2eb65b3](https://github.com/johngeorgewright/wsdl-tsclient/commit/2eb65b37def44a320898c22d148758f7d601ec30))
* **cli:** add option for modelPropertyNaming ([8670d29](https://github.com/johngeorgewright/wsdl-tsclient/commit/8670d29a8f98815a74d442595b7d7d3ebdb5388c))
* enumerable string to unions ([2bf8840](https://github.com/johngeorgewright/wsdl-tsclient/commit/2bf88402ee7fb6a2e7fdf4fa9ac3a7f564ef1739))
* eslint fixes plus other minor improvements ([c530e61](https://github.com/johngeorgewright/wsdl-tsclient/commit/c530e61a22f56b6f4e505893189f2a6467f32975))
* export enums in service ns ([1b7273d](https://github.com/johngeorgewright/wsdl-tsclient/commit/1b7273d78d7f2e762c25cc9119021e4e03e49665))
* new parameter --useWsdlTypeNames to generate interface names from wsdl type names ([98a9011](https://github.com/johngeorgewright/wsdl-tsclient/commit/98a9011179b0c59d45fd019fa1c41d924cdfb891))
* new parameter --useWsdlTypeNames to generate interface names from wsdl type names ([db94bcc](https://github.com/johngeorgewright/wsdl-tsclient/commit/db94bcc47e204d8c887cdecc59a1732f20c9bfe6))
* supply enum for enumerable string ([c4a9d5a](https://github.com/johngeorgewright/wsdl-tsclient/commit/c4a9d5ae52ca03da4bb365790d04b320ac70b3d4))


### Bug Fixes

* Add Typescript declaration ([84b149a](https://github.com/johngeorgewright/wsdl-tsclient/commit/84b149afd2dc09affb7faa73a2463444b98047f8))
* Add Typescript declearation ([d6cc3c9](https://github.com/johngeorgewright/wsdl-tsclient/commit/d6cc3c9cbcb3a8ec1ec1991982faa44de963814c))
* adjust typedImports handling to fallback on esm option in generator functions ([feaa65f](https://github.com/johngeorgewright/wsdl-tsclient/commit/feaa65f90621a1fcd970f4d57e0e0e37fa87862b))
* correct path for wsdl-tsclient binary in package.json ([3302e8f](https://github.com/johngeorgewright/wsdl-tsclient/commit/3302e8f6a84442935c712da4a52e7ca2127a0801))
* ensure safe access and error handling in parseDefinition function ([a892277](https://github.com/johngeorgewright/wsdl-tsclient/commit/a892277e756dfa65f746a8454fe5768e048f5453))
* execute workflow on release pr ([0680682](https://github.com/johngeorgewright/wsdl-tsclient/commit/0680682a77fd972e10291a2f70dcb56a2113dd2a))
* No reference to built files ([1e95dca](https://github.com/johngeorgewright/wsdl-tsclient/commit/1e95dcae97f267337dc28f86f25850a160ddbf11))
* No reference to built files ([4343968](https://github.com/johngeorgewright/wsdl-tsclient/commit/43439685e040769f0451a291647ea7bb22a7a870))
* update esm generator ([7b78863](https://github.com/johngeorgewright/wsdl-tsclient/commit/7b78863dd090db2e14659fa5e503112518eccbfe))
* update import paths to include .js extension ([94eec34](https://github.com/johngeorgewright/wsdl-tsclient/commit/94eec34d384d9632366b3bc0fc87e3a6d219f4af))
* update import paths to use .js extensions for ES module compatibility ([d709f9c](https://github.com/johngeorgewright/wsdl-tsclient/commit/d709f9c713a5d416be827dfa02a384115ab2a443))
* update node engine requirement to &gt;=24.0.0 in package.json ([49c1f7b](https://github.com/johngeorgewright/wsdl-tsclient/commit/49c1f7b0cbda75fda3949afc748568c02958ed5f))
* update prettier to version 3.8.1 ([a983b51](https://github.com/johngeorgewright/wsdl-tsclient/commit/a983b51e778afd70bcf9ffe00671d3fa9ec409ff))
* update typecheck function to use dynamic tsc path and enhance options ([cb43565](https://github.com/johngeorgewright/wsdl-tsclient/commit/cb435657783213b50829beaea919400c3e3f97be))
* wire --esm cli flag to options ([60b0d20](https://github.com/johngeorgewright/wsdl-tsclient/commit/60b0d20d60f8bd6f5aacd9f12c1e70fa7a9bb958))
* wire --esm cli flag to options ([3fd9a16](https://github.com/johngeorgewright/wsdl-tsclient/commit/3fd9a167e8119cbcd4657c21c063b78e02db4bdf))


### Dependency updates

* update ([5a6deb6](https://github.com/johngeorgewright/wsdl-tsclient/commit/5a6deb6d6bfa01243ac7f8e49386070d994ca7c8))
* update 2 ([9190a04](https://github.com/johngeorgewright/wsdl-tsclient/commit/9190a046b51ad965ec71e8a973aa53271b2f7585))
* update 3 ([2ea3280](https://github.com/johngeorgewright/wsdl-tsclient/commit/2ea32800307e098cfe7fc3c81d22442d06761e9d))


### Documentation

* correct typo in package.json description ([8755363](https://github.com/johngeorgewright/wsdl-tsclient/commit/87553637d651137faadd65d77e212c097c1c5da2))
* fix typo in comments for property naming convention ([4b338a0](https://github.com/johngeorgewright/wsdl-tsclient/commit/4b338a048b8684c0c2ce9f8073a8417ed53f9e71))
* mention 1.7.0 in changelog ([5058989](https://github.com/johngeorgewright/wsdl-tsclient/commit/50589893cc4dc08b759ff0f90cce43fdea240542))
* release 1.5.0 ([9d870a6](https://github.com/johngeorgewright/wsdl-tsclient/commit/9d870a6f66fdd1f452c4c785b9acee4ef9c8e736))
* smelling pisstake ([e0db616](https://github.com/johngeorgewright/wsdl-tsclient/commit/e0db6168a3a3175c62899ef7f4bea4b173e7902a))
* update ([f4f244f](https://github.com/johngeorgewright/wsdl-tsclient/commit/f4f244f035f5f5ecd954f19ac05820645a619aca))
* update build command and TypeScript strictness settings in documentation ([aa6dbd8](https://github.com/johngeorgewright/wsdl-tsclient/commit/aa6dbd8d0d33766df28d172ee354d3119b5144c4))
* update CLI options ([1ee5bc0](https://github.com/johngeorgewright/wsdl-tsclient/commit/1ee5bc052042978a46a6b9dc9629467be787872c))


### Maintenance

* add dist ([b9245ed](https://github.com/johngeorgewright/wsdl-tsclient/commit/b9245edf8073312d0e5e663d26e5c0b54b81bb38))
* add eslint disable comments for non-null assertions in parseDefinition function ([6ed29b7](https://github.com/johngeorgewright/wsdl-tsclient/commit/6ed29b7f81fafcfab27df9bd8c50034cf4cac23e))
* add johngw namespace ([62deb16](https://github.com/johngeorgewright/wsdl-tsclient/commit/62deb16c12ef77d0d26db69e6ec6def44dec1e30))
* add missing 1.6.0 changelog ([ab482ef](https://github.com/johngeorgewright/wsdl-tsclient/commit/ab482efd03b63f502712a42f5fd054a53d972ba0))
* add missing permissions for release-npm job in workflow ([a9be319](https://github.com/johngeorgewright/wsdl-tsclient/commit/a9be3191900ba038fb95f5a01a6725e7a8e9df1d))
* add permissions ([7477725](https://github.com/johngeorgewright/wsdl-tsclient/commit/7477725782ba315fa9ffc6e419a1bde703878d52))
* add release please with provenance ([49dc863](https://github.com/johngeorgewright/wsdl-tsclient/commit/49dc86324cd946a07250334292e94f41ba355333))
* add release-please with provenance ([16ff043](https://github.com/johngeorgewright/wsdl-tsclient/commit/16ff043a9a3c33cb5cf8d18ea1790410c0c7fc7a))
* add TypeScript SDK path to VSCode settings ([fe83842](https://github.com/johngeorgewright/wsdl-tsclient/commit/fe83842cb3e74e655dda9c622fb48499516f110d))
* commit dist ([ab1cda6](https://github.com/johngeorgewright/wsdl-tsclient/commit/ab1cda60075a3b73b8238de045873cf52e8d6545))
* fix type imports ([c70c73d](https://github.com/johngeorgewright/wsdl-tsclient/commit/c70c73dc001be407464b4ee98141bc8ea0344dd9))
* ignore dist ([3adb790](https://github.com/johngeorgewright/wsdl-tsclient/commit/3adb7908e4abb7aa7cde1b75ca3365a8376d4627))
* inline variable ([34ab146](https://github.com/johngeorgewright/wsdl-tsclient/commit/34ab1466d28288727c3daeff55f1b88f617207a2))
* move @types/yargs-parser to devDeps ([56dadd8](https://github.com/johngeorgewright/wsdl-tsclient/commit/56dadd8deee4a34dbb1f5e1116880350412639be))
* new package ([54f8f70](https://github.com/johngeorgewright/wsdl-tsclient/commit/54f8f703afdb7e22f82b71d2d666b668ce222817))
* permissions on test ([0fe0530](https://github.com/johngeorgewright/wsdl-tsclient/commit/0fe0530778d9722e49d373be13cc708826ec7dfd))
* rebuild ([7ac32b0](https://github.com/johngeorgewright/wsdl-tsclient/commit/7ac32b0626aa87e14753dce2665b15e7ee0239ff))
* release on every master push ([2fdf8a3](https://github.com/johngeorgewright/wsdl-tsclient/commit/2fdf8a3687e279d700116840ce5af401e177e6d2))
* remove dist ([f701fdf](https://github.com/johngeorgewright/wsdl-tsclient/commit/f701fdf87c4a2c88b5768e1bd3503e05f34bfbfe))
* remove todo ([3ce445d](https://github.com/johngeorgewright/wsdl-tsclient/commit/3ce445d84200b988addf1e4a7efec937e05b6a75))
* remove travisci ([59757f0](https://github.com/johngeorgewright/wsdl-tsclient/commit/59757f027999f8766f2217b6e78fc2350c1df39a))
* remove travisci badge ([b3341ee](https://github.com/johngeorgewright/wsdl-tsclient/commit/b3341ee08340cb464296e26eafc847a04cc14fbc))
* turn in to esm ([b32d502](https://github.com/johngeorgewright/wsdl-tsclient/commit/b32d502df4907cdf0af020d2712b87432645b17c))
* update args desc ([bdd3e51](https://github.com/johngeorgewright/wsdl-tsclient/commit/bdd3e51836ab5dc24acc1243d3b6ae3bce639d8c))
* update release ([ac61d24](https://github.com/johngeorgewright/wsdl-tsclient/commit/ac61d245b4ee9dd076732ea46e89a4d1e1aad5c2))
* update setup-node ([60758af](https://github.com/johngeorgewright/wsdl-tsclient/commit/60758af3695ae04c34410c073ba6fdc7e0d858a3))
* update test tsconfig to include current directory ([6ea7494](https://github.com/johngeorgewright/wsdl-tsclient/commit/6ea74941f99fe6330c8d729a19a7a4b8e2ad3933))
* update typescript to version 6.0.2 in package.json ([a0d080e](https://github.com/johngeorgewright/wsdl-tsclient/commit/a0d080e8764c1f4fa123d8e0b03cb168cddb0a96))
* use node version ([8d81b46](https://github.com/johngeorgewright/wsdl-tsclient/commit/8d81b46bb81cc50168a9f49b968bd305a26a4251))
* use node version ([b0fa6ab](https://github.com/johngeorgewright/wsdl-tsclient/commit/b0fa6ab98c37ed128461b47c57581e8e3f34610b))


### Refactors

* remove eslint ([3310784](https://github.com/johngeorgewright/wsdl-tsclient/commit/33107843094af33ab4d266d342ef80dcb30a04d0))


### Tests

* 2 ([2fbde51](https://github.com/johngeorgewright/wsdl-tsclient/commit/2fbde51525e4e55ca95af18d2c3aeb3f31822be7))
* fix compiling generated files ([c119a84](https://github.com/johngeorgewright/wsdl-tsclient/commit/c119a84197c4e6a448903cf6c8db62e41895dd6f))
* migrate from tape to vitest for improved testing framework ([2f4a2fb](https://github.com/johngeorgewright/wsdl-tsclient/commit/2f4a2fbffa1f633445eca32c1df3b584aa3118c6))
* refactor typecheck function to use execFile for improved command execution ([b4ac207](https://github.com/johngeorgewright/wsdl-tsclient/commit/b4ac207e65ec2f9c1643256fb088524acfb1536f))
* update definition checks in recursive file test ([fd380e9](https://github.com/johngeorgewright/wsdl-tsclient/commit/fd380e9758d74089f5707efa3b3a9a4af80cb988))

## [1.7.0] - 2024-07-15

- [feat(cli): add option for modelPropertyNaming](https://github.com/dderevjanik/wsdl-tsclient/commit/8670d29a8f98815a74d442595b7d7d3ebdb5388c) `--modelPropertyNaming=` 

## [1.6.0] - 2024-07-02

- Fix for code generation types not matching what node-soap produces by @nahidakbar in https://github.com/dderevjanik/wsdl-tsclient/pull/54
- fix for insensitive names and use of prefix and suffix by @vekexasia in https://github.com/dderevjanik/wsdl-tsclient/pull/46
- Reduce constraints on "soap" version by @mike-marcacci in https://github.com/dderevjanik/wsdl-tsclient/pull/77
- Fix products test by @icholy in https://github.com/dderevjanik/wsdl-tsclient/pull/65
- Handle namespaced primitive types by @icholy in https://github.com/dderevjanik/wsdl-tsclient/pull/79
- ESlint fixes plus other minor improvements by @svandriel in https://github.com/dderevjanik/wsdl-tsclient/pull/82
- Fixed: Output message without nested element defaulted to request type by @svandriel in https://github.com/dderevjanik/wsdl-tsclient/pull/83
- Bugfix: move development-only dependencies to devDependencies by @svandriel in https://github.com/dderevjanik/wsdl-tsclient/pull/85
- Make tsc invocation (during tests) work on windows as well by @svandriel in https://github.com/dderevjanik/wsdl-tsclient/pull/88

## [1.5.0] - 2024-04-16

- Project: Update soap dependency to 1.0.0 [#73](https://github.com/dderevjanik/wsdl-tsclient/pull/73) by @taylorreece
- ParseAndGenerate: Add optional `options` parameter all methods by @ZimGil

## [1.4.0] - 2022-04-27

- Fix issue with self recursive WSDL types [#39](https://github.com/dderevjanik/wsdl-tsclient/pull/39) by @mtranter
- Fix issue with `quiet` option not working properly
- Project: Updated several npm packages
- Project: Added eslint
- Project: Added test for typechecking generated wsdl clients [#19](https://github.com/dderevjanik/wsdl-tsclient/pull/19)
- Project: Add more jsdoc to `parseAndGenerate` and `parsedWsdl`
- ParseAndGenerate: Support for `colors`, `verbose` and `queit` options (before it was only possible through CLI)
- Docs: Mention `basicAuth` in `README.md`

## [1.3.1] - 2021-07-01

- Project: Updated several npm packages
- Parser: Fixed issue while finding name for sub-definition, which has same name as parent definition, fixes [#16](https://github.com/dderevjanik/wsdl-tsclient/issues/16)
- Generator: Sanitize method, param and property names (e.g. names with `-`), fixes [#16](https://github.com/dderevjanik/wsdl-tsclient/issues/16) [#18](https://github.com/dderevjanik/wsdl-tsclient/issues/18)

## [1.2.0] - 2021-06-26

- CLI: Add option for `maxRecursiveDefinitionName`, default `64`
- CLI: Add option for `caseInsensitiveNames`, default `false`
- Parser: Warn user if recursive definition name exceed `32`
- Parser: Option for `caseInsensitiveNames`, fix [#12](https://github.com/dderevjanik/wsdl-tsclient/pull/12) by @jakethagle
- Generator: Fix incorrect case

## [1.1.4] - 2021-05-10

- Parser: Fix `sourceName` for definitions
- Parser: Add warn logs when parsing `ComplexType` as `any`
- Parser: Partial options for `parse` function
- Generator: Partial options for `generate` function
- More meaningful source code comments

## [1.1.3] - 2021-05-03

- Fix cyclic error when parsing `ComplexType`. Now generates `any` type
- Fix problem with duplicated imports (importing same definition for client/service/port)

## [1.1.2] - 2021-05-01

- Fix wrong generated callback result
- Parser: Improved message for cyclic errors
- Parser: Improved message for finding non-collision definition name

## [1.1.1] - 2021-04-20

- Fix wrong AsyncFunction return's type generation #10
- Fix Ports importing bad definition filename
- Fix generated Port's method names

## [1.1.0] - 2021-04-17

- Engine: Is possible to pass URL to WSDL (with `http://` or `https://` prefix)
- Generator: Fix problem with generating import paths on Windows
- Parser: Pefix `targetNSAlias` and `targetNamespace` with `@`
- Parser: Parse input/output with `parts` only
- Parser: Better error reports for cyclic error
- Parser: Add verbose logs for parsing Service,Port,Method and Definitons
- Project: Add tests for generating clients from wsdl and checking Definitions
- CLI: Reworked to support more `yargs` features
- CLI: Show number of errors occured
- CLI: Detect `NO_COLOR` and `DEBUG` environment variables

## [1.0.1] - 2021-03-21

- Engine: Reworked engine completely by separating `Parser` and `Generator` logic
- Engine: `targetNSAlias` and `targetNamespace` is included in defition jsdoc instead of properties
- Engine:  Generator now generates Client interface based on wsdl name to avoid namespace merging
- Engine:  Support color logs (green for info, red for errors)
- Engine: `Write` logs are printed before file is saved
- Engine: Support for `modelNamePrefix` and `modelNameSuffix`
- Parser: Sanitize definition names by striping reserved characters (e.g. `:`)
- Parser: Definition's jsdoc includes sourcename of definition
- Generator: Generates `index.ts` with all re-exported definitions, ports, services and client
- CLI: Fixed glob
- CLI: Generating client to `outputDir/{wsdlFilename}` directory
- CLI: `--quiet` flag for suppressing all logs
- CLI: `--verbose` flag for verbose logs
- CLI: `--no-color` flag for turning off colourful logs
- CLI: `--emitDefinitionsOnly` flag to generate only Defintions files (no Ports, Service nor Clients)
- CLI: `--modelNamePrefix` and `--modelNameSuffix`
- Project: Updated README  by adding section about how to use generated client

## [0.3.5] - 2021-03-10

- Project: Fix path to dist sources #8 by @cobraz

## [0.3.4] - 2021-03-10

- Fix problem with generated methods that includes javascript keywords as param names

## [0.3.3] - 2021-03-09

- Project: Add typescript declaration #3 by @cobraz

## [0.3.2] - 2021-03-04

- CLI: Add `version` and `help` params
- Project: Add MIT license
- Project: Add minimum node engine (base on node-soap)

## [0.3.1] - 2021-03-03

- CLI: Add support for glob pattern
- Generator: Add support for generating named client

## [0.2.0] - 2021-03-01

- Generator: Use camelcase for generating definitions, filenames and function params
- CLI: Replace `-i` with `WSDL`
