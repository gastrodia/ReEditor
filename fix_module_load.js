
var pathConfig = {
    "wozllajs":"/Engine/WOZLLA.js",
    "eventemitter3":'/node_modules/eventemitter3/index.js',
    "exec-time":"/library/exec-time.js",
    "jquery":"/library/jquery-1.11.3.js",
    "react":"/library/react/build/react.js",
    "react-dom":"/library/react/build/react-dom.js"
  }

var Module = require("module");
var path = require("path");
var fs = require("fs");
var oldResolve = Module._resolveFilename;

function getAbsPath(item){
  return __dirname + pathConfig[item]
}

function isHtml(str){
    if (str.split('.')[1] == 'html') {
        console.log('is a html? ', str)
    }

    return str.split('.')[1] == 'html';
}

function getHtmlLoadPath(request){
    console.log('this is a html file');
    return './' + request + '.js';
}

function isAngularModule(request){
  if(request.indexOf('angular2') > -1){
    return true;
  }else{
    return false;
  }
}

function getAngularModuleLoadPath(request){
  console.log('angular2 module ########################################');
  console.log(request);
  return __dirname + '/angular/dist/js/cjs/modules/'  + request + '.js';
}

Module._resolveFilename = function(request, parent){

  var filepath = null;

  if (pathConfig[request]) {
    filepath = getAbsPath(request);
  }

  else {
    try{
      filepath = oldResolve.apply(this,arguments);
    }catch(e){
            filepath = request;
    }
  }

  return filepath;


}
