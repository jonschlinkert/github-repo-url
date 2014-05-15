/*!
 * github-repo-url <https://github.com/jonschlinkert/github-repo-url>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT)
 */

const origin = require('remote-origin-url');
const gitUrl = require('github-url-from-git');
const log = require('verbalize');


module.exports = (function() {
  if (/\bhas not been defined\b/.test(origin.url())) {
    log.warn("Can't calculate git-username. This probably means that a git remote origin doesn't exist.");
    return '';
  }
  return gitUrl(origin.url());
})();