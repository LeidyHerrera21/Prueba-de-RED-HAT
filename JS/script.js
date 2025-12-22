"use strict"
window.API = "https://servicios.campus.pe/"

const menuItems = [
  { nombre: "Navidad", url: "pages/navidad.html", script: "js/pages/navidad.js" },
  { nombre: "Empleados", url: "pages/empleados.html", script: "js/pages/empleados.js" },
  { nombre: "Proveedores", url: "pages/proveedores.html", script: "js/pages/proveedores.js" },
]

const $ = id => document.getElementById(id)
const menuMain = $("menu-main"),
  mainContent = $("main-content"),
  logoNavbarBrand = $("logo-navbar-brand")

menuItems.forEach(itemMenu => {
  const liMenu = document.createElement("li")
  const link = document.createElement("a")

  liMenu.className = "nav-item"
  link.className = "nav-link"

  liMenu.appendChild(link)
  menuMain.appendChild(liMenu)

  link.innerText = itemMenu.nombre

  link.addEventListener("click", () => {
    loadPage(itemMenu.url, itemMenu.script)
    menuMain.querySelectorAll("li").forEach(li =>
      li.querySelector("a").classList.remove("active"))
    link.classList.add("active")
  })
})

const loadPage = (itemRuta, itemScript) => {
  fetch(itemRuta)
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data
      if (itemScript) {
        const script = document.createElement("script")
        script.src = itemScript
        script.defer = true
        mainContent.appendChild(script)
      }
    })
}

logoNavbarBrand.addEventListener("click", () => {
  loadPage("pages/home.html", "js/pages/home.js")
})

logoNavbarBrand.click()