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
        return React.createElement("span", null, "Hello World");
    };
    return Application;
})(React.Component);
module.exports = Application;
//# sourceMappingURL=Application.js.map