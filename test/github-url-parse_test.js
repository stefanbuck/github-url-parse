'use strict';

var githubUrlParse = require('../lib/github-url-parse.js');
var assert = require('should');

describe('githubUrlParse', function () {

  it('should be awesome', function () {

    assert.equal(githubUrlParse('http://google.com', null));

    assert.notEqual(githubUrlParse('http://github.com', null));

    githubUrlParse('http://github.com/stefanbuck').should.eql({
      user:'stefanbuck'
    });

    githubUrlParse('http://github.com/stefanbuck/github-url-parse').should.eql({
      user:'stefanbuck',
      repo: 'github-url-parse'
    });

    githubUrlParse('http://github.com/stefanbuck/github-url-parse/tree/master/lib').should.eql({
      user:'stefanbuck',
      repo: 'github-url-parse',
      branch: 'master',
      path: 'lib',
      type: 'tree'
    });

    githubUrlParse('http://github.com/stefanbuck/github-url-parse/tree/master/lib/utils').should.eql({
      user:'stefanbuck',
      repo: 'github-url-parse',
      branch: 'master',
      path: 'lib/utils',
      type: 'tree'
    });

    githubUrlParse('https://github.com/stefanbuck/github-url-parse/blob/master/lib/index.js').should.eql({
      user:'stefanbuck',
      repo: 'github-url-parse',
      branch: 'master',
      path: 'lib/index.js',
      type: 'blob'
    });

  });
});
