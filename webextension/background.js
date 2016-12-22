const port = browser.runtime.connect({name: 'connection-to-legacy'});

port.onMessage.addListener(function(message) {
  browser.storage.local.set({temperment: message});
});

port.postMessage({type: 'ready'});
