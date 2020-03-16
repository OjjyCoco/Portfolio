const list_icon = document.querySelector("header i");
const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");
const header = document.querySelector("header");

let largeur_fenêtre = window.innerWidth;
let hauteur_fenêtre = window.innerHeight;


if(largeur_fenêtre > 900){
}
else if(largeur_fenêtre < 900){
    nav_appear()
}

/* little devices */

function nav_appear(){
    list_icon.addEventListener("click", () => {
        if(nav.style.display === "none"){
            nav.style.display = "flex";
        }
        else{
            nav.style.display = "none";
        }
    })
}

function nav_appear_smooth(){
    list_icon.addEventListener("click", () => {
        if(nav.style.transform === "scale(0)"){
            nav.style.transform = "scale(1)";
        }
        else{
            nav.style.transform = "scale(0)";
        }
    })
}