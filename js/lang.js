function setLanguage(lang) {
  console.log("Language:", lang);
  localStorage.setItem("lang", lang);

  fetch("lang/" + lang + ".json")
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".lang").forEach(el => {
        const key = el.getAttribute("data-key");
        if (data[key]) {
          el.innerHTML = data[key];
        }
      });
    })
    .catch(err => console.error("LANG ERROR", err));
}

window.onload = function () {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
};

