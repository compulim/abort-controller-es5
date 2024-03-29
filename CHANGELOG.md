# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2022-02-28

### Changed

- Updated end-to-end tests, by [@compulim](https://github.com/compulim), in PR [#25](https://github.com/compulim/abort-controller-es5/pull/25)
   - Using Docker to isolate tests
   - Test against different combinations of Node.js, NPM, and resolvers
- Bumped dependencies, by [@compulim](https://github.com/compulim), in PR [#25](https://github.com/compulim/abort-controller-es5/pull/25)
   - [`@babel/cli@7.17.6`](https://npmjs.com/package/@babel/cli)
   - [`@babel/core@7.17.5`](https://npmjs.com/package/@babel/core)
   - [`@babel/plugin-transform-runtime@7.17.0`](https://npmjs.com/package/@babel/plugin-transform-runtime)
   - [`@babel/preset-env@7.16.11`](https://npmjs.com/package/@babel/preset-env)
   - [`@babel/runtime-corejs3@7.17.2`](https://npmjs.com/package/@babel/runtime-corejs3)
   - [`esbuild@0.14.23`](https://npmjs.com/package/esbuild)
   - [`read-pkg-up@9.1.0`](https://npmjs.com/package/read-pkg-up)
   - [`jest@27.5.1`](https://npmjs.com/package/jest)

## [2.0.0] - 2021-07-20

### Changed

- Moved to [`esbuild`](https://npmjs.com/package/esbuild) from Webpack, in PR [#19](https://github.com/compulim/abort-controller-es5/pull/19)
- Move to end-to-end tests from unit tests, in PR [#22](https://github.com/compulim/abort-controller-es5/pull/22)
- Ponyfill `globalThis` and `Promise` via `core-js-pure` by usage, in PR [#22](https://github.com/compulim/abort-controller-es5/pull/22)

## [1.2.1] - 2021-07-13

### Changed

- Bumped dependencies in PR [#17](https;//github.com/compulim/abort-controller-es5/pull/17)
   - [`@babel/core@7.14.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.14.7`](https://npmjs.com/package/@babel/preset-env)
   - [`abort-controller@3.0.0`](https://npmjs.com/package/abort-controller)
   - [`babel-loader@8.2.2`](https://npmjs.com/package/babel-loader)
   - [`jest@27.0.6`](https://npmjs.com/package/jest)
   - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)
   - [`webpack@4.46.0`](https://npmjs.com/package/webpack)

## [1.2.0] - 2020-08-06

### Changed

- Bumped dependencies
   - [`@babel/core@7.11.1`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.11.0`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.1.0`](https://npmjs.com/package/babel-loader)
   - [`webpack@4.44.1`](https://npmjs.com/package/webpack)
   - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)
- Revert `npx` because [`.npmrc` issues with `NpmAuthenticateV0`](https://github.com/microsoft/azure-pipelines-tasks/issues/13265)

## [1.1.0] - 2020-05-25

### Changed

- CI/CD moved to GitHub Actions from Travis CI
- Use `npx` as much as possible to reduce footprint
- Lockdown versions of dependencies to reduce package maintenance
- Skip minification to speed up build

## [1.0.1] - 2019-12-24

### Added

- Accepts `abort-controller` package from parent `node_modules` folders

## [1.0.0] - 2019-12-24

### Added

- Initial commit
