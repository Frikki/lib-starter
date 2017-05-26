const { execSync } = require('child_process')
const { join } = require('path')

const cwd = join(__dirname, '..')

const packages =
  [
    '@motorcycle/tslint',
    '@types/mocha',
    '@types/node',
    'commitizen',
    'conventional-changelog-cli',
    'cz-conventional-changelog',
    'glob-expand',
    'husky',
    'mocha',
    'ts-node',
    'tslint',
    'typescript',
    'validate-commit-message',
  ]

execSync('yarn add --dev ' + packages.join(' '), { cwd, stdio: 'inherit' })
