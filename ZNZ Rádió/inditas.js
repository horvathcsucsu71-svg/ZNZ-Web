// ZNZ Szignál – Ceremoniális indítás
function startZNZSignal() {
  const szignal = document.createElement('div');
  szignal.id = 'znz-szignal';
  szignal.innerText = 'ZNZ Rádió – Adás indul!';
  document.body.appendChild(szignal);

  // Eltűnik 5 másodperc után
  setTimeout(() => {
    szignal.remove();
  }, 5000);
}

// Automatikusan indul MIME ellenőrzés után
window.addEventListener('load', startZNZSignal);
