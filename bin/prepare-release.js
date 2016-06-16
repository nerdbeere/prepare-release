#!/usr/bin/env node

var releasePrepare = require('../');
var argv = require('optimist').argv;

var onlyDeployMajor = argv['deploy-major'];
var version = argv.version;
var input = argv.input;
var output = argv.output;

if(!version || !input || !output) {
  throw new Error('--version, --input and --output flags are mandatory!');
}

releasePrepare(version, input, output, onlyDeployMajor);