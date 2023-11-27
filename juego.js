
//Variables globales

//Documento
const d = document;

let imageN1 = [
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg"},
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg"},
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg"},
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg"},
    { nombre: "Lokillo", url: "images/lokillo.jpeg"},
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg"},
    { nombre: "Juan Jose Gallego", url: "images/Jjose.jpg"},
    { nombre: "Cantinflas", url: "images/Cantinflas.jpg"},
    { nombre: "Yokoi Kenji", url: "images/kenji.jpg"},
    { nombre: "Jorge Mario Aguirre", url: "images/JorgeAguila.jpg"},
    { nombre: "Lokillo", url: "images/lokillo.jpeg"},
    { nombre: "Julio Iglesias", url: "images/JulioIglesias.jpg"}
]

let tablero = d.querySelector(`.tablero`)
let img_Name = []; //Se guardan los nombres para luego compararlos
let img_ID = [];

//Agregar imagen al tablero

Agregar_Img()
function Agregar_Img () {
    imageN1.forEach((imagen, posicion)=>{
        let div = d.createElement(`div`)
        div.className = "col-3"
        let img = d.createElement(`img`)
        img.className = "img-fluid height-img"
        img.id = posicion //Se le agrega la posicion al ID
        img.alt = imagen.nombre //Se le agrage el nombre del personaje a Alt
        img.src = "images/cranium-2028555_1280.png" //Se le agraga la URL a la propiedad URL
        img.addEventListener("click", Mostrar_Img) //Se le agrega el evento click a la tarjeta
        div.appendChild(img)
        tablero.appendChild(div)
    })
}

//Mostrar las img ocultas/Flip over
function Mostrar_Img () {
    let img_id = this.getAttribute("id")
    this.src = imageN1[img_id].url
    img_Name.push(imageN1[img_id].nombre)
    img_ID.push(img_id)

    if (img_Name.length == 2) //Cuántos datos en el array de nombres de imagenes selected 
    {
        setTimeout(Comparar_Img, 250) //Después de 250 ms se muestra el alert de si hizo match o no
    }
}

//Comparar img para marcarlas
function Comparar_Img () {
    let imagenes_restantes = d.querySelectorAll(".tablero > div > img")
    if ( img_ID[0] ==  img_ID[1]) {
        alert("No mames güey, no la misma carta, ¡Elije otra!")
        imagenes_restantes[img_ID[0]].src = "images/cranium-2028555_1280.png"
    }
    else {
        if ( img_Name[0] == img_Name[1]) {
            alert("Match!")
            imagenes_restantes[img_ID[0]].src = "images/pngtree-check-mark-icon-design-template-vector-png-image_6331394.jpg"
            imagenes_restantes[img_ID[1]].src = "images/pngtree-check-mark-icon-design-template-vector-png-image_6331394.jpg"

            imagenes_restantes[img_ID[0]].removeEventListener("click", Mostrar_Img); //Remueve el evento "click" de la imagen y el posible evento a aplicar con ese click
            imagenes_restantes[img_ID[1]].removeEventListener("click", Mostrar_Img); 
        }
        else {
            alert("Try again!")
            imagenes_restantes[img_ID[0]].src = "images/cranium-2028555_1280.png"
            imagenes_restantes[img_ID[1]].src = "images/cranium-2028555_1280.png"    
        }
    }



    img_Name = [] //Se reinicia para que se pueda trbajar siempre con la posicion 0 y 1
    img_ID = [] //Se reinicia para que se pueda trbajar siempre con la posicion 0 y 1
}
