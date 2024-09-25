// popup.js

// Add event listener to save the clientId to local storage when the user types in the clientId field.
document.getElementById('clientId').addEventListener('input', function() {
  const clientId = this.value;
  chrome.storage.local.set({'clientId': clientId});
});

// Add event listener to save the clientSecret to local storage when the user types in the clientSecret field.
document.getElementById('clientSecret').addEventListener('input', function() {
  const clientSecret = this.value;
  chrome.storage.local.set({'clientSecret': clientSecret});
});

// Load and populate the clientId and clientSecret fields from local storage when the popup is opened.
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['clientId', 'clientSecret'], function(result) {
      if (result.clientId) {
          document.getElementById('clientId').value = result.clientId;
      }
      if (result.clientSecret) {
          document.getElementById('clientSecret').value = result.clientSecret;
      }
  });
});

// Add event listener to calculate the encoded credentials when the user clicks the calculate button.
document.getElementById('calculate').addEventListener('click', () => {
  const clientId = document.getElementById('clientId').value;
  const clientSecret = document.getElementById('clientSecret').value;
  const encodedAuth = window.encodeCredentials(clientId, clientSecret);
  document.getElementById('result').textContent = `Basic ${encodedAuth}`;
});

// Load the authUtils.js script to make the encodeCredentials function available.
const authScript = document.createElement('script');
authScript.src = 'authUtils.js';
document.head.appendChild(authScript);
