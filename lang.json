const userLang = navigator.language.slice(0, 2);
const supportedLangs = ["ar", "cs", "da", "de", "el", "en", "es", "fi", "fr", "he",
    "hu", "it", "ja", "ko", "nl", "no", "pl", "pt", "ro", "ru",
    "sk", "sv", "tr", "uk", "zh"];
const lang = supportedLangs.includes(userLang) ? userLang : "en";

fetch(`locales/${lang}.json`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("news").innerHTML = data.news.map(item => `<p>${item}</p>`).join("");
    document.getElementById("footer").textContent = data.footer;
  });
