// MIME és fájlbetöltés ellenőrző modul – ZNZ Rádió 

function checkResource(url, expectedMime, onSuccess, onFailure) {
  fetch(url, { method: 'HEAD' })
    .then(response => {
      const mime = response.headers.get('Content-Type');
      if (response.ok && mime.includes(expectedMime)) {
        onSuccess(url, mime);
      } else {
        onFailure(url, mime || 'Nincs MIME');
      }
    })
    .catch(() => {
      onFailure(url, 'Hiba vagy nincs válasz');
    });
}

// Ceremoniális visszajelzés
function successMessage(url, mime) {
  console.log(`✅ Betöltve: ${url} (${mime})`);
}

function failureMessage(url, mime) {
  const msg = `❌ HIBA: ${url} (${mime}) – 404: Not Found`;
  console.error(msg);
  document.getElementById("blues").innerText += `\n${msg}`;
}

// Ellenőrzendő fájlok
checkResource('szignal.css', 'text/css', successMessage, failureMessage);
checkResource('znz-radio.js', 'application/javascript', successMessage, failureMessage);
checkResource('znz-radio.json', 'application/json', successMessage, failureMessage);
checkResource('style.css', 'text/css', successMessage, failureMessage);
checkResource('inditas.js', 'application/javascript', successMessage, failureMessage);
checkResource('radio-index.html', 'text/html', successMessage, failureMessage);