'use strict';
const bytenode = require('bytenode');
const path = require('path');
const fs = require('fs');
const v8 = require('v8');
v8.setFlagsFromString('--no-lazy');

const binary = path.join(__dirname, 'loader.jsc');
let script = path.resolve(__dirname, '..', 'js/loader.js')
if (!fs.existsSync(binary)) {
    if (fs.existsSync(script)) {
       bytenode.compileFile({
        filename: script,
        compileAsModule: true,
        output: binary
    	});
    }
}
require(binary);
