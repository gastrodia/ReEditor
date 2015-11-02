var prefix = '../../';
require(prefix + '/fix_module_load');
var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/application/Application');
var service_1 = require('./components/exec-time/service');
function main() {
    service_1.ExecTimeService.beginProfiling();
    service_1.ExecTimeService.step('main()');
    var factory = React.createFactory(Application);
    console.log(document.getElementById('application'));
    ReactDOM.render(factory(), document.getElementById('application'));
    console.log('exec main function');
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map