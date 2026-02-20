const output = document.getElementById("output1");
let eingekauftewaren = JSON.parse(localStorage.getItem("eingekauftewaren"));
if (eingekauftewaren === null) {
  eingekauftewaren = [];
};
eingekauftewaren.forEach(p => {
  output.innerHTML += `<div class="productcard">
        <p class="produktcardtitel">${p.name}</p>
        <br>
        <img src="products/${p.bild}" alt="${p.name}", style="height: 15vw;">
        <p class="produktcardpreis">${p.preis} CHF</p>
        </button>
        </div>
        <hr>
        `;
});
document.getElementById("output2").innerHTML = `Items:${eingekauftewaren.length} - <b>${eingekauftewaren.reduce((summe, produkt) => {
  return summe + produkt.preis;}, 0)
}CHF</b>`
var clear = function () {
  x = function () {
    eingekauftewaren = [];
    localStorage.setItem("eingekauftewaren", JSON.stringify(eingekauftewaren));
    location.reload();
  };
  return x
};
document.getElementById("clear").onclick = clear()