"use strict";

module.exports = function(code){
    if (code){
        eval(code);
    }
    else{
        throw new Error("simulate error");
    }
};