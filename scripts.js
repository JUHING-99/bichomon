console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").innerHTML ="Generasión 1 Pokimon"


//Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector(".infocard-list-pkmn-lg").style.backgroundColor ="lightblue"


//Imprime por consola la URL de la página.
let url = window.document.URL;
console.log(url)


//Imprime por consola el dominio de la página.
let dominio = window.location.host;
console.log(dominio)

//Imprime todos los nodos de imagen.
let fotos = document.querySelectorAll("img");
console.log(fotos)

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


let gif = document.querySelectorAll("img")
for(let a=0;a<gif.length;a++){
 //gif[a].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}


//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let pokemon = document.querySelectorAll(".infocard-lg-data.text-muted > small > .itype.flying")

for (let i=0; i<pokemon.length;i++){
        pokemon[i].parentElement.parentElement.style.backgroundColor = "yellow"
    }



