// authUtils.js
function encodeCredentials(clientId, clientSecret) {
  const authString = `${clientId}:${clientSecret}`;
  return btoa(authString); // Retorna la cadena codificada en base64
}

// Export the function to make it available to other modules 
window.encodeCredentials = encodeCredentials;
