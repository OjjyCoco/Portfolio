const list_icon = document.querySelector("header i");
const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const nom = document.querySelector("header span");
const les_p = document.querySelectorAll("#first_text p");
const les_span_logo = document.querySelectorAll("ul li span");
const les_li = document.querySelectorAll("ul li");
const progress_bar = document.getElementById("level");
let largeur_fenêtre = window.innerWidth;
let hauteur_fenêtre = window.innerHeight;


if(largeur_fenêtre > 900){
    header_size_on_scroll()
    apparition_texte()
    apparition_logo()
    prog_bar()
}
else if(largeur_fenêtre < 900){
    nav_appear()
    apparition_logo()
}

/* phone devices */

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

/* laptop devices */

function header_size_on_scroll(){
    window.addEventListener("scroll",() => {
        if(window.scrollY > 0){
            header.style.height = "7%";
            nom.style.visibility = "hidden";
            nav.style.transform = "translateX(-22%)";
        }
        else{
            header.style.height = "10%";
            nom.style.visibility = "visible";
            nav.style.transform = "translateX(0)";
        }
    });
}


function apparition_texte(){
    let delay = 200;
    let str_delay;
    for(p of les_p){
        str_delay = delay + "ms";
        p.style.animation = "paragraphe 1000ms ease-in-out backwards " + str_delay;
        delay = delay + 200;
    }
}

function apparition_logo(){
    let delay = 1500;
    let str_delay;
    for(span of les_span_logo){
        str_delay = delay + "ms";
        span.style.animation = "godown 1000ms ease-in-out backwards " + str_delay;
        delay = delay + 200;
    }
}

function prog_bar(){
    window.addEventListener("scroll", () => {
        let ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        progress_bar.style.transform = "scaleX(" + ratio + ")";
    })
}


/* Pour retenir les données du formulaire
const send_btn = document.getElementById("envoyer_btn");
const champs = document.querySelectorAll(".champs");
let liste = []
send_btn.addEventListener("click", () => {
    for(champ of champs){
        liste.push(champ.value)
    }
    alert(liste)
})
*/
