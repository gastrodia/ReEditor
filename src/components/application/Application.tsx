/// <reference path="../../../typings/tsd.d.ts"/>
import {ExecTimeService as execTime} from '../exec-time/service';
import $ = require('jquery');

import React = require("react");

declare module JSX {
  interface ElementClass {
    render: any;
  }
}

const tpl = require('./application.html').load();
const baseCss = require('../basic.css').load();
const css = require('./application.css').load();

interface Props extends React.Props<Application> {

}

class Explorer extends React.Component<Props,{}>{
  render(){
    return <div>explorer</div>;
  }
}

class Hierarchy extends React.Component<Props,{}>{
  render(){
    return <div>hierarchy</div>;
  }
}

class Visual extends React.Component<Props,{}>{
  render(){
    return <div>visual</div>;
  }
}

class Inspector extends React.Component<Props,{}>{
  render(){
    return <div>Inspector<div>;
  }
}

class Application extends React.Component<Props,{}> {
  render() {
    return  <div id="app" className="app unselectable">
                <div className="panel-top">
                </div>
                <div className="panel-center">
                    <div className="panel panel-project">
                        <Explorer />
                    </div>
                    <div className="splitter splitter0" />
                    <div className="panel panel-hierarchy">
                        <Hierarchy />
                    </div>
                    <div className="splitter splitter1" />
                    <div className="panel panel-component">
                        <Inspector />
                    </div>
                    <div className="splitter splitter2" />
                    <div className="panel panel-visual-editor">
                        <Visual />
                    </div>
                </div>
                <div className="dialog-container">
                    <component-selector />
                </div>
            </div>;
  }
}


export = Application;
