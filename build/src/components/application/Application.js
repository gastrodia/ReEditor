var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var tpl = require('./application.html').load();
var baseCss = require('../basic.css').load();
var css = require('./application.css').load();
var Explorer = (function (_super) {
    __extends(Explorer, _super);
    function Explorer() {
        _super.apply(this, arguments);
    }
    Explorer.prototype.render = function () {
        return React.createElement("div", null, "explorer");
    };
    return Explorer;
})(React.Component);
var Hierarchy = (function (_super) {
    __extends(Hierarchy, _super);
    function Hierarchy() {
        _super.apply(this, arguments);
    }
    Hierarchy.prototype.render = function () {
        return React.createElement("div", null, "hierarchy");
    };
    return Hierarchy;
})(React.Component);
var Visual = (function (_super) {
    __extends(Visual, _super);
    function Visual() {
        _super.apply(this, arguments);
    }
    Visual.prototype.render = function () {
        return React.createElement("div", null, "visual");
    };
    return Visual;
})(React.Component);
var Inspector = (function (_super) {
    __extends(Inspector, _super);
    function Inspector() {
        _super.apply(this, arguments);
    }
    Inspector.prototype.render = function () {
        return React.createElement("div", null, "Inspector");
    };
    return Inspector;
})(React.Component);
var ComponentSelector = (function (_super) {
    __extends(ComponentSelector, _super);
    function ComponentSelector() {
        _super.apply(this, arguments);
    }
    ComponentSelector.prototype.render = function () {
        return React.createElement("div", null, "ComponentSelector");
    };
    return ComponentSelector;
})(React.Component);
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.render = function () {
        return React.createElement("div", {"id": "app", "className": "app unselectable"}, React.createElement("div", {"className": "panel-top"}), React.createElement("div", {"className": "panel-center"}, React.createElement("div", {"className": "panel panel-project"}, React.createElement(Explorer, null)), React.createElement("div", {"className": "splitter splitter0"}), React.createElement("div", {"className": "panel panel-hierarchy"}, React.createElement(Hierarchy, null)), React.createElement("div", {"className": "splitter splitter1"}), React.createElement("div", {"className": "panel panel-component"}, React.createElement(Inspector, null)), React.createElement("div", {"className": "splitter splitter2"}), React.createElement("div", {"className": "panel panel-visual-editor"}, React.createElement(Visual, null))), React.createElement("div", {"className": "dialog-container"}, React.createElement(ComponentSelector, null)));
    };
    return Application;
})(React.Component);
module.exports = Application;
//# sourceMappingURL=Application.js.map