(() => {
  const tbodyProveedores = document.getElementById("tbody-proveedores");

  fetch(window.API + "proveedores.php")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const fila = document.createElement("tr");

        const celda1 = document.createElement("td");
        const celda2 = document.createElement("td");
        const celda3 = document.createElement("td");
        const celda4 = document.createElement("td");
        const celda5 = document.createElement("td");
        const celda6 = document.createElement("td");
        const celda7 = document.createElement("td");

        celda1.textContent = item.idproveedor;
        celda2.textContent = item.nombreempresa;
        celda3.textContent = item.nombrecontacto;
        celda4.textContent = item.cargocontacto;
        celda5.textContent = item.direccion;
        celda6.textContent = item.ciudad;
        celda7.textContent = item.pais;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        fila.appendChild(celda5);
        fila.appendChild(celda6);
        fila.appendChild(celda7);

        tbodyProveedores.appendChild(fila);
      });
    });
})();
