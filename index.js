/*!
 * github-repo-url <https://github.com/jonschlinkert/github-repo-url>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT)
 */

const origin = require('remote-origin-url');
const gitUrl = require('github-url-from-git');


module.exports = gitUrl(origin.url());