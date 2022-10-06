function e(e){fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}document.querySelector("#search-box").addEventListener("input",(function(t){e(t.target.value)}));
//# sourceMappingURL=index.ffb17f94.js.map
