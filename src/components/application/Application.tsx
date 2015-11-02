/// <reference path="../../../typings/tsd.d.ts"/>
import {ExecTimeService as execTime} from '../exec-time/service';
import $ = require('jquery');

import React = require("react");

const tpl = require('./application.html').load();
const baseCss = require('../basic.css').load();
const css = require('./application.css').load();
 
interface Props extends React.Props<Application> {
    hello: string;
    world?: string;
    bar: boolean;
}

interface State {
    inputValue?: string;
    seconds?: number;
}


class Application extends React.Component<Props, {}> {
  render() {
    return <span>Hello World</span>;
  }
}


export = Application;
