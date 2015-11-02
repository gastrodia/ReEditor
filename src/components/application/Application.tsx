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
    return  <div id="app" className="app unselectable">
                <div className="panel-top">
                </div>
                <div className="panel-center">
                    <div className="panel panel-project">
                        <explorer />
                    </div>
                    <div className="splitter splitter0" />
                    <div className="panel panel-hierarchy">
                        <hierarchy />
                    </div>
                    <div className="splitter splitter1" />
                    <div className="panel panel-component">
                        <inspector />
                    </div>
                    <div className="splitter splitter2" />
                    <div className="panel panel-visual-editor">
                        <visual />
                    </div>
                </div>
                <div className="dialog-container">
                    <component-selector />
                </div>
            </div>

;
  }
}


export = Application;
