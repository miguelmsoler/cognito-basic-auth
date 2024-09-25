// contentScript.js
function insertAuthInfo() {
  const checkbox = document.querySelectorAll('input[type="checkbox"][class^="awsui_native-input"]')[0];

  clientIdElement = document.querySelectorAll(".cognito_copyable")[0].innerText;
  const clientId = clientIdElement.innerText.trim();
  chrome.storage.local.set({'clientId': clientId});
  clientSecretElement = element.nextElementSibling; // Guarda el elemento que contiene el valor
  
  console.log('clientIdElement: ', clientIdElement);
  console.log('clientSecretElement: ', clientSecretElement);

  // Si se encuentran ambos elementos, procede con la inserción.
  if (clientIdElement && clientSecretElement) {
    
    const clientSecret = clientSecretElement.innerText.trim();
    const encodedAuth = window.encodeCredentials(clientId, clientSecret);
    
    const authContainer = document.createElement('div');
    authContainer.className = 'cognito_key-value-item';
    authContainer.innerHTML = `<div class="cognito_key-value-item_key">Encoded Authorization</div>
                               <div class="cognito_key-value-item_value">
                                 <input type="text" value="Basic ${encodedAuth}" id="encodedAuthInput" readonly>
                                 <button onclick="copyToClipboard()">Copy</button>
                               </div>`;

    // Inserta el contenedor justo después del elemento del Client Secret.
    clientSecretElement.parentElement.insertAdjacentElement('afterend', authContainer);
  }
}

function copyToClipboard() {
  const copyText = document.getElementById("encodedAuthInput");
  navigator.clipboard.writeText(copyText.value)
    .then(() => {
      alert("Copied the text: " + copyText.value);
    })
    .catch(err => {
      console.error('Error in copying text: ', err);
    });
}

window.addEventListener('load', insertAuthInfo);

