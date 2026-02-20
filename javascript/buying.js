var kaufen = function (produkt) {
  var x = function () {
    document.getElementById(`buy${produkt.name}`).classList.remove("click");
    void document.getElementById(`buy${produkt.name}`).offsetWidth;
    document.getElementById(`buy${produkt.name}`).classList.add("click");
    let eingekauftewaren = JSON.parse(localStorage.getItem("eingekauftewaren")); 
    if (eingekauftewaren === null) {
      eingekauftewaren = [];
    };
    eingekauftewaren.push(produkt);
    localStorage.setItem("eingekauftewaren", JSON.stringify(eingekauftewaren));
  };
  return x;
};

produkte.forEach(p => {
  document.getElementById(`buy${p.name}`).onclick = kaufen(p);
});