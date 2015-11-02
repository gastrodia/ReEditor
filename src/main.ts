/// <reference path="./tsd.d.ts"/>

var prefix = '../../';
require(prefix + '/fix_module_load');
import React = require('react');
import ReactDOM = require('react-dom');
import Application = require('./components/application/Application');

 import {ExecTimeService as execTime} from './components/exec-time/service';

 //require('./components/webworks/service');
export function main() {
  execTime.beginProfiling();
  execTime.step('main()');
  var factory = React.createFactory(Application);
  console.log(  document.getElementById('application'));
  ReactDOM.render(
          factory(),
          document.getElementById('application')
        );

  console.log('exec main function')
}



main();
