const output = document.getElementById("output1");
let eingekauftewaren = JSON.parse(localStorage.getItem("eingekauftewaren"));
if (eingekauftewaren === null) {
  eingekauftewaren = [];
};
eingekauftewaren.forEach(p => {
  output.innerHTML += `<div><p>${p.name} - ${p.preis} CHF</p><br><img src="${p.bild}" alt="${p.name}", style="height: 15vw;">
    </div><hr>`;
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