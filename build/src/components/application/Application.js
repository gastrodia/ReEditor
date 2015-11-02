var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var tpl = require('./application.html').load();
var baseCss = require('../basic.css').load();
var css = require('./application.css').load();
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.render = function () {
        return React.createElement("div", {"id": "app", "className": "app unselectable"}, React.createElement("div", {"className": "panel-top"}), React.createElement("div", {"className": "panel-center"}, React.createElement("div", {"className": "panel panel-project"}, React.createElement("explorer", null)), React.createElement("div", {"className": "splitter splitter0"}), React.createElement("div", {"className": "panel panel-hierarchy"}, React.createElement("hierarchy", null)), React.createElement("div", {"className": "splitter splitter1"}), React.createElement("div", {"className": "panel panel-component"}, React.createElement("inspector", null)), React.createElement("div", {"className": "splitter splitter2"}), React.createElement("div", {"className": "panel panel-visual-editor"}, React.createElement("visual", null))), React.createElement("div", {"className": "dialog-container"}, React.createElement("component-selector", null)));
    };
    return Application;
})(React.Component);
module.exports = Application;
//# sourceMappingURL=Application.js.map