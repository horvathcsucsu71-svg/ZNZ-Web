// ZNZ Rádió – Hamis Hírek
const verses = [
  "Tél jött, ősz ment el",
  "Hitler sír, Einstein felel",
  "Hitler szól, de senki se hallja"
];

function generateVerse() {
  const index = Math.floor(Math.random() * verses.length);
  document.getElementById("radio").innerText = "ZNZ Rádió:\n" + verses[index];
}

// Nyelvi JSON betöltés
fetch('znz-radio.json')
  .then(response => response.json())
  .then(data => {
    const lang = navigator.language.startsWith('hu') ? 'hu' : 'en';
    document.getElementById("headline").innerText = data[lang].headline;
    document.getElementById("intro").innerText = data[lang].intro;
  });
