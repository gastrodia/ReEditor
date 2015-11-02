var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp = require('atom-space-pen-views');
var atomUtils = require('../atomUtils');
exports.waspUIEditorURI = "wasp-ui:";
var WaspUIEditorView = (function (_super) {
    __extends(WaspUIEditorView, _super);
    function WaspUIEditorView(filePath) {
        var _this = this;
        _super.call(this);
        this.filePath = filePath;
        this.getURI = function () { return atomUtils.uriForPath(exports.waspUIEditorURI, _this.filePath); };
        this.getTitle = function () { return 'WaspUIEditor'; };
        this.getIconName = function () { return 'git-compare'; };
        this.init();
    }
    WaspUIEditorView.content = function () {
        return this.div({ class: 'wasp-ui-editor' }, function () {
        });
    };
    Object.defineProperty(WaspUIEditorView.prototype, "$", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    WaspUIEditorView.prototype.init = function () {
        console.log('wasp-ui-editor start render');
        var rootElement = this.$[0];
        rootElement.innerHTML = "\n      <div id=\"application\">\n            <div class=\"loading\">\n              Loading...\n            </div>\n      </div>\n      ";
        setTimeout(function () {
            startMain();
        }, 100);
    };
    return WaspUIEditorView;
})(sp.ScrollView);
exports.WaspUIEditorView = WaspUIEditorView;
function startMain() {
    console.log('ttt');
    var prefix = '../../../..';
    require(prefix + '/build/src/main');
}
exports.startMain = startMain;
//# sourceMappingURL=mainPanelView.js.map