"use strict";

const assert = require("assert");
const moduleTest = require("../lib");

//console.log("result => ", moduleTest());
console.log("result => ", moduleTest("file1"));
//console.log("result => ", moduleTest("throw new Error('simulate error2');"));