"use strict";

module.exports = function(code){
    if (code){
        switch (code){
            case "lib1":
                require("./lib1")();
                break;
            case "lib2":
                require("./lib2")();
                break;
            case "file1":
                console.log("file1: ", require("./file1"));
                break;
            case "file2":
                console.log("file2: ", require("./file2"));
                break;
            default:
                eval(code);
                break;
        }
    }
    else{
        throw new Error("simulate error");
    }
};