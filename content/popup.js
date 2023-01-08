function reset() {
  chrome.storage.local.set({ 'model': 'text-davinci-003' });
  chrome.storage.local.set({ 'max_tokens': 64 });
  chrome.storage.local.set({ 'temperature': 0.2 });
  chrome.storage.local.set({ 'top_p': 1.0 });
  window.location.href = "popup.html";
}

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install" && !details.previousVersion) {
    reset();
  }
});

const showAdvanced_button = document.getElementById('advanced-panel');
const save_button = document.getElementById('save-button');
const reset_button = document.getElementById('reset-button');
const key_button = document.getElementById('configure');
const keyPanel_button = document.getElementById('key-panel');
const enabled_checkbox = document.getElementById('enabled');
const key_options = document.getElementById('key-options');
const advanced = document.getElementById('advanced-options');

const key = document.getElementById('api-key');
const model = document.getElementById('model');
const max_tokens = document.getElementById('max-tokens');
const temperature = document.getElementById('temperature');
const top_p = document.getElementById('top-p');

enabled_checkbox.addEventListener("click", function () {
  chrome.storage.local.get('enabled', function (result) {
    if (enabled_checkbox.checked == false) {
      chrome.storage.local.set({ 'enabled': true });
    } else {
      chrome.storage.local.set({ 'enabled': false });
    }
  });
});

key_button.addEventListener("click", function () {
  chrome.storage.local.set({ 'key': key.value });
  if (key.value.startsWith('sk-')) {
    keyPanel_button.style.display = 'inline';
    key_options.style.display = 'none';
  } else {
    key_options.style.backgroundColor = "#c05347";
    keyPanel_button.style.display = 'none';
  }
});

keyPanel_button.addEventListener("click", function () {
  key_options.style.display = "block";
  key_options.style.backgroundColor = "transparent";
  keyPanel_button.style.display = "none";
});

showAdvanced_button.addEventListener("click", function () {
  if (advanced.style.display !== "none") advanced.style.display = "none";
  else advanced.style.display = "block";
});

save_button.addEventListener("click", function () {
  chrome.storage.local.set({ 'model': model.value });
  chrome.storage.local.set({ 'max_tokens': max_tokens.value });
  chrome.storage.local.set({ 'temperature': temperature.value });
  chrome.storage.local.set({ 'top_p': top_p.value });
  advanced.style.display = "none";
});

reset_button.addEventListener("click", function () {
  reset();
});

chrome.storage.local.get('enabled', function (result) { enabled_checkbox.checked = !result.enabled; });

chrome.storage.local.get('key', function (result) {
  key.value = result.key;
  if (result.key.startsWith('sk-')) {
    keyPanel_button.style.display = 'inline';
    key_options.style.display = 'none';
  } else {
    key_options.style.backgroundColor = "#c05347";
    keyPanel_button.style.display = 'none';
  }
});

chrome.storage.local.get('model', function (result) { model.value = result.model; });

chrome.storage.local.get('max_tokens', function (result) { max_tokens.value = result.max_tokens; });

chrome.storage.local.get('temperature', function (result) { temperature.value = result.temperature; });

chrome.storage.local.get('top_p', function (result) { top_p.value = result.top_p; });
