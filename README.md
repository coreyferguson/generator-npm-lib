
# Npm Lib, Yeoman Generator

## Usage

```bash
npm install -g yo generator-npm-lib
yo npm-lib
cd my-project
npm install
npm test
```

## Features

- ES5 + ES6 source; [Babel][]
- Unit testing, integration testing, mocking, code coverage; [Mocha][], [Chai][], [Sinon.JS][], [Istanbul][]
- Version controlled; [Release It!][]
- JavaScript style enforcement; [JSCS][]

[Chai]: http://chaijs.com/
[Istanbul]: https://github.com/gotwarlost/istanbul
[JSCS]: https://github.com/jscs-dev/node-jscs
[Mocha]: https://mochajs.org/
[Release It!]: https://github.com/webpro/release-it
[Sinon.JS]: http://sinonjs.org/

## Project Structure

```bash
└─ $ tree -I 'node_modules'
.
├── README.md
├── CONTRIBUTE.md
├── package.json
├── src
│   └── index.js                  // <-- start coding here
├── babel
│   └── index.js                  // transpiled from source code
├── config
│   ├── release.json              // release configuration
│   └── watch-filter-config.json
├── coverage
│   ├── coverage.raw.json         // JSON coverage data
│   └── lcov-report
│       └── index.html            // HTML coverage data
└── test
    ├── integration
    ├── support
    │   ├── test-utils.js
    │   └── watch-filter.js
    └── unit
        ├── index.spec.js         // <-- start testing here
        └── test-environment.spec.js
```

## NPM Scripts

- `npm test`: Run style enforcer, tests, and code coverage.
- `npm run release`: Bump the `package.json` version, commit, tag, and publish.

## Contribution

See [CONTRIBUTE.md](CONTRIBUTE.md) for contribution details.
