const list_icon = document.querySelector("header i");
const nav = document.querySelector("nav");
const nav_a = document.querySelectorAll("nav a")
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const nom = document.querySelector("header span");
const les_p = document.querySelectorAll("#first_text p");
const les_span_logo = document.querySelectorAll("ul li span");
const les_li = document.querySelectorAll("ul li");
const progress_bar = document.getElementById("level");
const linked_in = document.querySelectorAll("ul li a")[0]

const FR = document.getElementById("FR");
const EN = document.getElementById("EN");
const move_div = document.getElementById("move");

const first_para = document.getElementById("first_para");
const first_text = document.getElementById("first_text");
const services_p = document.querySelector("#services #para_services_container p");
const service_p_case = document.querySelectorAll("#services_container .service p");
const titres = document.querySelectorAll(".titre_categ");
const competences_p = document.querySelector("#competences p");
const cvcontact_p = document.querySelector("#cv_contact p");
const sendbtn = document.getElementById("envoyer_btn");
const non_exhaustive = document.getElementById("non-exhaustive");
const outer_loader = document.getElementById("outer_loading");
const body = document.getElementById("body");

let largeur_fenêtre = window.innerWidth;
let hauteur_fenêtre = window.innerHeight;


if(largeur_fenêtre > 900){
    header_size_on_scroll()
    apparition_texte()
    apparition_logo()
    prog_bar()
    change_language()
    lien_non_existant()
    caroussel_infini(2)
    loader()
}
else if(largeur_fenêtre < 900){
    nav_appear_smooth()
    apparition_logo()
    change_language()
    lien_non_existant()
    caroussel_infini(1)
    loader()
    nav.style.transform = "translateY(-130%)"
}

/* phone devices */

function loader(){

    outer_loader.style.display = "none";

}

function nav_appear(){
    list_icon.addEventListener("click", () => {
        if(window.getComputedStyle(nav).display === "none"){
            nav.style.display = "flex";
        }
        else{
            nav.style.display = "none";
        }
    })
}



function nav_appear_smooth(){
    list_icon.addEventListener("click", () => {
        if(nav.style.transform == "translateY(-130%)"){
            nav.style.transform = "translateY(-1%)"
        }
        else{
            nav.style.transform = "translateY(-130%)"
        }
    })
}

/* laptop devices */

function loader(){

    window.addEventListener("load", function(){
        outer_loader.style.display = "none";
        body.style.height = "100%";
    });

}

function header_size_on_scroll(){
    window.addEventListener("scroll",() => {
        if(window.scrollY > 0){
            header.style.height = "7%";
            nom.style.visibility = "hidden";
        }
        else{
            header.style.height = "10%";
            nom.style.visibility = "visible";
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

function change_language(){
    EN.addEventListener("click", function(){
        move_div.style.transform = "translateX(50px)";
        move_div.style.background = "linear-gradient(to left, #ed213a, #93291e)";
        first_para.textContent = "Currently in engineering school in Paris, I transform a part of my free time into lines of code and mechatronics projects. Here are some of my projects, with details about my skills."
        first_text.innerHTML = "<p>Hello,</p><p>my name is<span> Nathan</span>,</p><p>I study, I code, I create.</p>"
        nav_a[1].textContent = "Projects";
        nav_a[2].textContent = "Skills";
        titres[1].textContent = "Projects";
        titres[2].textContent = "Skills";
        services_p.innerHTML = "Mastering the computer languages necessary to create a WEB page, I am looking for experience. I will therefore meet your needs in a rigorous and professional way.</br></br>Let me know if you are ready to make a place for yourself on the web !";
        service_p_case[0].textContent = "Communication with the customer to create the design corresponding to his request.";
        service_p_case[1].textContent = "Development and hosting of the site on the server, relationship with the database.";
        service_p_case[2].textContent = "Optimization of the natural referencing of the client's site on search engines.";
        competences_p.textContent = "Notions of the tools of a full-stack developer. These languages will allow me to best meet your needs.";
        cvcontact_p.textContent = "If you would like to know more, feel free to check my online CV! You will find a section containing my contact information. Otherwise, you can fill in the form below to leave me a message."
        sendbtn.value = "Send";
        non_exhaustive.textContent = "This is a non-exhaustive list, if you are interested in a particular model, please contact me !"
    });
    
    FR.addEventListener("click", function(){
        move_div.style.transform = "translateX(0)";
        move_div.style.background = "linear-gradient(to right, #0d548d, #1cb5e0)";
        first_para.textContent = "Actuellement en école d'ingénieur à Paris, je transforme une partie de mon temps libre en lignes de code et en projets mécatroniques. Voici certains de mes projets, accompagnés de précisions sur mes compétences."
        first_text.innerHTML = "<p>Bonjour,</p><p>je m'appelle<span> Nathan</span>,</p><p>j'étudie, je code, je crée.</p>";
        nav_a[1].textContent = "Projets";
        nav_a[2].textContent = "Compétences";
        titres[1].textContent = "Projets";
        titres[2].textContent = "Compétences";
        services_p.innerHTML = "Maîtrisant les langages informatiques nécaissaires à la création d'un page WEB, je suis à la recherche d'experience. Je répondrai donc à votre besoin de manière rigoureuse et professionnel.</br></br>Faites moi signe si vous êtes prêt(e) à vous faire une place sur la toile !";
        service_p_case[0].textContent = "Communication avec le client pour créer le design correspondant à sa demande.";
        service_p_case[1].textContent = "Développement et hébergement du site sur le serveur, relation avec la base de donnée.";
        service_p_case[2].textContent = "Optimisation du référencement naturel du site du client sur les moteurs de recherche.";
        competences_p.textContent = "Notions des outils d'un développeur full-stack. Ces langages me permettront de répondre le mieux à votre besoin.";
        cvcontact_p.textContent = "Si vous voulez en savoir plus, n'hésitez pas à consulter mon CV en ligne ! Vous y trouverez une partie contenant mes coordonnées pour me contacter. Sinon, vous pouvez remplir le formulaire ci-dessous pour me laisser une message."
        sendbtn.value = "Envoyer";
        non_exhaustive.textContent = "Ceci une liste non-exhaustive, si vous êtes intéressé par une maquette particulère, contactez moi !"
    });
}

function lien_non_existant(){
    linked_in.addEventListener("click", function(e){
        alert("Unfortunately, my LinkedIn profile doesn't exist yet... But it won't be long now!")
    });
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




function caroussel_infini(slidesVisible, slideToScroll = 1){
    /* Besoin d'un container de vw avec overflow hidden, et dedans un wrapper contenant les élements à faire défiler. C'est le wrapper qu'on fait bouger pour faire défiler les élements. 
    Il faut que initSlide et slideToScroll soient divisible entre eux, sinon ça rend mal
    Nombre de boutons pagination = slides.length - initSlide + 1
    */


   const button_left = document.getElementById("buttonleft");
   const button_right = document.getElementById("buttonright");
   const wrapper = document.getElementById("wrapper");
   const slides = document.querySelectorAll(".slide");
   const btns_container = document.getElementById("btns_container")

   // On def le nbr de boutons pagination
   let b = slides.length
   for(let i = 0; i < b; i++){
       let btn = document.createElement("div")
       btn.setAttribute("class", "btn_caroussel")
       btns_container.appendChild(btn)
   }

   const buttons = document.querySelectorAll(".btn_caroussel");

   
    for(let elem of slides){
        wrapper.appendChild((elem.cloneNode(true)))
        wrapper.insertBefore(elem.cloneNode(true), slides[0])
    }

    const wrapper_width = (100 / slidesVisible) * slides.length*3 /* for 100vw */
    wrapper.style.width = wrapper_width + "vw"
    let index = slides.length
    let transitionVal = "all 400ms"
    let scaleBtnVal = "scale(1.5)"
    buttons[0].style.transform = scaleBtnVal

    function toSlide(i = index){
        return (100 / (slides.length*3)) * i
    }

    wrapper.style.transform = "translateX(-" + toSlide() + "%)"
    
    button_left.addEventListener("click", function(){

        // Evite le beug et le spam sur le bouton
        if(index < 3){
            button_left.style.display = "none"
            button_right.style.display = "none"
            setTimeout(() => {
                button_left.style.display = "block"
                button_right.style.display = "block"
            }, 400);
        }

        index = index - slideToScroll
        if(index > 0){
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(-" + toSlide() + "%)"
        }
        else if(index < 0){
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(" + toSlide(index * -1) + "%)"
        }
        else{
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(" + toSlide() + "%)"
        }

        (function infiniteEffectLeft(){
            wrapper.addEventListener("transitionend", function(){
                if(index <= slides.length - slidesVisible){
                    index += slides.length
                    wrapper.style.transitionDuration = "0s"
                    wrapper.style.transform = "translateX(-" + toSlide() + "%)"
                }
            })
        })()

        // Pour faire grossir les btns en fonctions du caroussel
        for(btn of buttons){
            btn.style.transform = "scale(1)"
        }
        if(index < slides.length){
            buttons[index].style.transform = scaleBtnVal
        }
        else{
            buttons[index - slides.length].style.transform = scaleBtnVal
        }
    })
    
    button_right.addEventListener("click", function(){

        //Evite le bug et le spam sur le bouton
        if(index >= slides.length*2){
            button_left.style.display = "none"
            button_right.style.display = "none"
            setTimeout(() => {
                button_left.style.display = "block"
                button_right.style.display = "block"
            }, 400);
        }

        index = index + slideToScroll
        if(index > 0){
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(-" + toSlide() + "%)"
        }
        else if(index < 0){
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(" + toSlide(index * -1) + "%)"
        }
        else{
            wrapper.style.transition = transitionVal
            wrapper.style.transform = "translateX(-" + toSlide() + "%)"
        }

        (function infiniteEffectRight(){
            wrapper.addEventListener("transitionend", function(){
                if(index >= slides.length * 2){
                    index -= slides.length
                    wrapper.style.transitionDuration = "0s"
                    wrapper.style.transform = "translateX(-" + toSlide() + "%)"
                }
            })
        })()

        // Pour faire grossir les btns en fonctions du caroussel
        for(btn of buttons){
            btn.style.transform = "scale(1)"
        }
        if(index >= slides.length*2){
            buttons[index - slides.length*2].style.transform = scaleBtnVal
        }
        else{
            buttons[index - slides.length].style.transform = scaleBtnVal
        }
    })
    
    let buttons_len = buttons.length
    for(let i = 0; i < buttons_len; i++){
        ((i) => {
            buttons[i].addEventListener("click", function(){
                index = slides.length + i
                wrapper.style.transition = transitionVal
                for(btn of buttons){
                    btn.style.transform = "scale(1)"
                }
                buttons[i].style.transform = scaleBtnVal
                wrapper.style.transform = "translateX(-" + toSlide(slides.length + i) + "%)"
            })
        })(i)
    }


    (function autoSliding(){
        let autocar = setInterval(() => {
            wrapper.style.transition = transitionVal
            index++
            wrapper.style.transform = "translateX(-" + toSlide() + "%)"
            for(btn of buttons){
                btn.style.transform = "scale(1)"
            }
            if(index >= slides.length*2){
                buttons[index - slides.length*2].style.transform = scaleBtnVal
            }
            else{
                buttons[index - slides.length].style.transform = scaleBtnVal
            }
            (function infiniteEffectRight(){
                wrapper.addEventListener("transitionend", function(){
                    if(index >= slides.length * 2){
                        index -= slides.length
                        wrapper.style.transitionDuration = "0s"
                        wrapper.style.transform = "translateX(-" + toSlide() + "%)"
                    }
                })
            })()
        }, 13000)
        
        for(let btn of buttons){
            btn.addEventListener("click", function(){
                clearInterval(autocar)
            })
        }


    })()
    

}
