
//Variables globales

//Documento
const d = document;

let imageN1 = [
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
]

let imageN2 = [
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
    { nombre: "loki", url: "images/Loki_-_Perfil.png" },
    { nombre: "dante", url: "images/Portrait_de_Dante.jpg" },
    { nombre: "loki", url: "images/Loki_-_Perfil.png" },
    { nombre: "dante", url: "images/Portrait_de_Dante.jpg" },
]
let imageN3 = [
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg" },
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg" },
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg" },
    { nombre: "Lokillo", url: "images/lokillo.jpeg" },
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg" },
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg" },
    { nombre: "loki", url: "images/Loki_-_Perfil.png" },
    { nombre: "dante", url: "images/Portrait_de_Dante.jpg" },
    { nombre: "loki", url: "images/Loki_-_Perfil.png" },
    { nombre: "dante", url: "images/Portrait_de_Dante.jpg" },
    { nombre: "psycho", url: "images/A_New_American_Psycho_Poster_by_MGProductions9.jpg" },
    { nombre: "personaje_filipino", url: "01-felipe_calderon_01_s.jpg" },
    { nombre: "psycho", url: "images/A_New_American_Psycho_Poster_by_MGProductions9.jpg" },
    { nombre: "personaje_filipino", url: "01-felipe_calderon_01_s.jpg" },
]

let tablero = d.querySelector(`.tablero`)
let start = d.querySelector(`.btn-iniciar`)
let img_Name = []; //Se guardan los nombres para luego compararlos
let img_ID = [];

let aciertos_contador = 0;
let intentos_contador = 0;
let temporizador = 55;
var time_elapsed;
let level = 1;
let Round_Images;
let en_juego = false;

let aciertos = d.querySelector(".acierto")
let intentos = d.querySelector(".intento")
let tiempo_display = d.querySelector(".tiempo");
let level_display = d.querySelector(".nivel");

start.addEventListener("click", function () {

    //Se comprueba si se encuentra en juego (Se presionoó botón)
    if (en_juego == false && level == 1) {
        en_juego = true;
        level_One()
    }
    else if (en_juego == false && level == 2) {
        en_juego = true;
        level_Two()
    }
    else if (en_juego == false && level == 3) {
        en_juego = true;
        level_Three()
    }
})




//Agregar imagen al tablero
function Agregar_Img() {
    if (level == 1) {
        Round_Images = imageN1
    } 
    else if (level == 2) {
        Round_Images = imageN2
    }
    else if (level == 3) {
        Round_Images = imageN3
    }

    Round_Images.forEach((imagen, posicion) => {
        let div = d.createElement(`div`)
        div.className = "col-3"
        let img = d.createElement(`img`)
        img.className = "img-fluid height-img aumentar"
        img.id = posicion //Se le agrega la posicion al ID
        img.alt = imagen.nombre //Se le agrage el nombre del personaje a Alt
        img.src = "images/cranium-2028555_1280.png" //Se le agrega la URL a la propiedad URL
        img.addEventListener("click", Mostrar_Img) //Se le agrega el evento click a la tarjeta
        div.appendChild(img)
        tablero.appendChild(div)
    })
}

//Mostrar las img ocultas/Flip over
function Mostrar_Img() {
    let img_id = this.getAttribute("id")
    this.src = Round_Images[img_id].url
    this.className = "height-img"
    img_Name.push(Round_Images[img_id].nombre)
    img_ID.push(img_id)

    if (img_Name.length == 2) //Cuántos datos en el array de nombres de imagenes selected 
    {
        setTimeout(Comparar_Img, 250) //Después de 250 ms se muestra el alert de si hizo match o no
    }
}

//Comparar img para marcarlas
function Comparar_Img() {
    let imagenes_restantes = d.querySelectorAll(".tablero > div > img")
    if (img_ID[0] == img_ID[1]) {
        alert("No mames güey, no la misma carta, ¡Elije otra!")
        imagenes_restantes[img_ID[0]].src = "images/cranium-2028555_1280.png"

        intentos_contador++;
        intentos.textContent = intentos_contador;
    }
    else {
        if (img_Name[0] == img_Name[1]) {
            imagenes_restantes[img_ID[0]].src = "images/pngtree-check-mark-icon-design-template-vector-png-image_6331394.jpg"
            imagenes_restantes[img_ID[1]].src = "images/pngtree-check-mark-icon-design-template-vector-png-image_6331394.jpg"

            imagenes_restantes[img_ID[0]].removeEventListener("click", Mostrar_Img); //Remueve el evento "click" de la imagen y el posible evento a aplicar con ese click
            imagenes_restantes[img_ID[1]].removeEventListener("click", Mostrar_Img);

            aciertos_contador++;
            aciertos.textContent = aciertos_contador;
        }
        else {
            imagenes_restantes[img_ID[0]].src = "images/cranium-2028555_1280.png"
            imagenes_restantes[img_ID[1]].src = "images/cranium-2028555_1280.png"

            intentos_contador++;
            intentos.textContent = intentos_contador;
        }
    }

    img_Name = [] //Se reinicia para que se pueda trbajar siempre con la posicion 0 y 1
    img_ID = [] //Se reinicia para que se pueda trbajar siempre con la posicion 0 y 1

    //Comprobar si se aciertan todas las imágenes y se pasa el nivel
    if (level == 1 && aciertos_contador == 6) {
        alert("🚩🏴‍☠️ >> Next level >> 🚩🏴‍☠️")
        level++;
        level_display.textContent = level;
        intentos_contador = 0;
        intentos.textContent = intentos_contador;
        aciertos_contador = 0;
        aciertos.textContent = aciertos_contador;
        clearInterval(time_elapsed);
        temporizador = 45;
        tiempo_display.textContent = temporizador;
        Remove_Images()
        en_juego = false;
    }
    else if (level == 2 && aciertos == 8){
        alert("🚩🏴‍☠️ >> Next level >> 🚩🏴‍☠️")
        level++;
        level_display.textContent = level;
        intentos_contador = 0;
        intentos.textContent = intentos_contador;
        aciertos_contador = 0;
        aciertos.textContent = aciertos_contador;
        clearInterval(time_elapsed);
        temporizador = 35;
        tiempo_display.textContent = temporizador;
        Remove_Images()
        en_juego = false;
    }
    else if (level == 3 && aciertos == 10){
        alert("💥💥 Success! 💥💥")
        location.reload()
    }
}

function level_One () {
    Agregar_Img()
    level_display.textContent = level;
    Tiempo_Juego()
}

function level_Two () {
    Agregar_Img()
    Tiempo_Juego()
}

function level_Three () {
    Agregar_Img()
    Tiempo_Juego()
}

function Tiempo_Juego () {
    time_elapsed = setInterval(() => {
        temporizador--;
        tiempo_display.textContent = temporizador;

        if (temporizador == 10) {
            tiempo_display.classList.add("alerta_tiempo")
            alert("Chillin' out huh? Rush!!!")
        }

        else if (temporizador == 0) {
            alert("🕖TIME OUT🕞")
            clearInterval(time_elapsed)
            location.reload();
        }
    }, 1000)
}

function Remove_Images () {
    let removedImages = d.querySelectorAll(".tablero div");
    removedImages.forEach(img => {
        img.remove();
    });
}

