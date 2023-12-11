let nombre_player = d.querySelector(".jugador");
let listaJugadores = "jugadores";

//Se obtienen los datos
function obtenerDatos() {
    let datos_player = {
        "nombre": nombre_player.textContent,
        "intentos": total_intentos,
        "tiempo_total": tiempo_juego,
        "tiempo_restante": time_left
    }
    console.log(datos_player)
    //Pasar los datos del player
    Guardar_datos(datos_player);
}

function Guardar_datos (datos) {
    let jugadores = [];
    //Tomar datos previamente guardados en localStorage
    let datos_previos = JSON.parse(localStorage.getItem(listaJugadores));
    if (datos_previos != null) {
        jugadores = datos_previos;
    }

    //Guardar datos de jugador y de sesión en el array
    jugadores.push(datos);
    //Guardar datos en localStorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores))
}

function mostrarDatos () {
    let jugadores = [];
    //Tomar datos previamente guardados en localStorage
    let datos_previos = JSON.parse(localStorage.getItem(listaJugadores));
    if (datos_previos != null) {
        jugadores = datos_previos;
    }

    //Organizar por marcadores
    jugadores.sort((a, b) => {
        if (a.tiempo_total < b.tiempo_total ) {
            return -1;
        }
        if (a.intentos < b.intentos ) {
            return 1;
        }
    })

    //Mostrar datos en la tabla
    jugadores.forEach((jugador, i) => {
        //Se crea una fila
        let fila = d.createElement('tr');
        fila.innerHTML = `
            <td> ${i+1} </td>
            <td> ${jugador.nombre} </td>
            <td> ${jugador.tiempo_total} </td>
            <td> ${jugador.intentos} </td>
            <td> ${jugador.tiempo_restante} </td>
        `
        tabla_registro.appendChild(fila)
    })
}