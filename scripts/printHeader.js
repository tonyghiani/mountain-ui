#!/usr/bin/env node

function printHeader(header = process.argv[2]) {
  console.log(`┏━━━ ${header} `.padEnd(50, '━').concat('┛'));
}

if (!module.parent) printHeader();

module.exports = printHeader;
