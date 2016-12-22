const title = document.querySelector('#message');
const yes = document.querySelector('#yes');
const port = browser.runtime.connect({name: "connection-to-legacy"});

browser.storage.local.get('temperment').then(data => {
  title.innerText = `Are you ${data.temperment}?`;
});

yes.addEventListener('click', () => {
  browser.storage.local.get('temperment').then(data => {
    port.postMessage({type: 'report', temperment: data.temperment});
  });
});
