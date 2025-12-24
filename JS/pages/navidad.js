(() => {
    const arbol = document.getElementById("arbol")
    if (!arbol) return

let hojas = "";

[10, 3].forEach(r =>
  [...Array(r)].forEach((_, i) => {
    hojas += '<span class="color">*</span>'.repeat(1 + i * 2) + "<br>";
  })
);

    
arbol.innerHTML = hojas
arbol.style.textAlign = "center"

document.querySelectorAll("h2,h3").forEach(el => {
    el.style.textAlign = "center"
    el.innerHTML = [...el.innerHTML]
        .map(c=> '<span class="color"> ${c === "" ? "&nbsp" : c}</span>')
        .join("")
})
document.querySelectorAll(".color").forEach((e,i)=>
    e.style.animatio = 'animarhojas ${i/20 + 0.5}S infinite')
})



