/** feature.js **/
const webExtension = require("sdk/webextension");

exports.which = function (study, val) {
  webExtension.startup().then(api => {
    const {browser} = api;
    browser.runtime.onConnect.addListener((port) => {
      console.log('connected browser side');
      port.onMessage.addListener(function(message) {
        console.log('got a message');
        console.log(message);
        if (message.type === 'report') {
          study.report({ temperment: message.temperment })
        } else if (message.type === 'ready') {
          port.postMessage(val);
        }
      });
    });
  });
};

exports.isEligible = function () {
  return true;
};

exports.reset = function () {

};
