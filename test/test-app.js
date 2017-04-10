
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('app', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        appName: 'npm-lib-test',
        appDescription: 'Npm Lib test.',
        authorName: 'Corey Ferguson',
        authorEmail: 'corey.t.ferguson@gmail.com'
      })
      .on('end', done);
  });

  it('should copy required files', function() {
    assert.file([
      // dot files
      '.babelrc',
      '.gitignore',
      '.npmignore',
      '.jscsrc',

      // root files
      'package.json',
      'README.md',
      'CONTRIBUTING.md',

      // config
      'config/release.json',
      'config/watch-filter.js',

      // src
      'src/index.js',

      // test
      'test/spec/index.unit.js',
      'test/spec/test-environment.js',
    ]);
  });

});
