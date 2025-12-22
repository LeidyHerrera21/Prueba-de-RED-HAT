(() => {
    const tblEnvios = document.getElementById("tbody-envios")
    fetch(window.API + "envios.php")
        .then(response => response.json())
        .then(data => {
            data.map((envio) => {
                console.log(envio.nombre + " " + envio.telefono)
                let fila = "<tr>"
                fila += "<td>" + envio.idempresaenvio + "<td>"
                fila += "<td>" + envio.nombre + "<td>"
                fila += "<td>" + envio.telefono + "<td>"
                fila += "<td>" + envio.latitud + "<td>"
                fila += "<td>" + envio.longitud + "<td>"
                fila += "<tr>"
                tblEnvios.innerHTML += fila
            })
        })
})()