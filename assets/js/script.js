


// HISTOIRE

let main = document.querySelector("main");


let divHistoire = document.createElement("div");
divHistoire.className = "container histoire";
main.appendChild(divHistoire);


let divRowHistoire = document.createElement("div");
divRowHistoire.className = "row align-items-center";
divHistoire.appendChild(divRowHistoire);


let separateur = document.createElement("div");
separateur.id = "separateur";
divRowHistoire.appendChild(separateur);


let colImg = document.createElement("div");
colImg.className = "col-md-6 d-flex";
divRowHistoire.appendChild(colImg);


let imghistoire = document.createElement("img");
imghistoire.className = "img-fluid";
imghistoire.id = "imghistoire";
imghistoire.src = "./assets/images/bg-gite.jpg";
colImg.appendChild(imghistoire);


let h2Histoire = document.createElement("h2");
h2Histoire.innerText = "HISTOIRE DU GITE HURLE";
separateur.appendChild(h2Histoire);


let divcolHistoire = document.createElement("div"); // PARENT DU BLOC 
divcolHistoire.className = "col-md-6";
divRowHistoire.appendChild(divcolHistoire);


let separateurbis = document.createElement("div");
separateurbis.id = "separateurbis";
divcolHistoire.appendChild(separateurbis);

let p1Histoire = document.createElement("p");
p1Histoire.innerText = histoireText[0].text;

let p2Histoire = document.createElement("p");
p2Histoire.innerText = histoireText[1].text;

let p3Histoire = document.createElement("p");
p3Histoire.innerText = histoireText[2].text;

divcolHistoire.append(p1Histoire, p2Histoire, p3Histoire);

let separateurbis2 = document.createElement("div");
separateurbis2.id = "separateurbis";
divcolHistoire.appendChild(separateurbis2);

let h2ChambresCont = document.createElement("div");
h2ChambresCont.id = "separateur";
let h2Chambres = document.createElement("h2");
h2Chambres.innerText = "DÉCOUVREZ NOS CHAMBRES";

h2ChambresCont.appendChild(h2Chambres);
divRowHistoire.appendChild(h2ChambresCont);

// FONCTIONS POUR AFFICHER CHAMBRES ET FORMULES

function afficherChambresFormulesRight(myObject, index) {

    let divCont = document.createElement("div");
    divCont.className = "container-fluid";

    // Utiliser un ID unique pour chaque bouton, contenu collapse et carousel
    let collapseId = `collapseContent${index}`;
    let buttonId = `btn${index}`;
    let carouselId = `carouselExampleIndicators${index}`;
    let image1 = myObject.image1;
    let image2 = myObject.image2;

    divCont.innerHTML = `
    <div class="container-fluid"  id="reservation">
        <div class="row align-items-center">

            <div class="fond col-md-9">
                <h3>${myObject.title}</h3>
            </div>

            <div class="col-md-6 d-flex order-md-2">

                <!-- Carousel avec ID unique -->
                <div id="${carouselId}" class="carousel slide w-100 rounded-4 carouselstyle">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${image1}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${image2}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>

            </div>

            <div class="col-md-6 order-md-1">
                <div id="separateurbis"></div>
                <p>${myObject.presentation}</p>
                <!-- Bouton collapse avec ID unique -->
                <button id="${buttonId}" class="btn btn-primary mt-1 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">En savoir plus..</button>
                <!-- Contenu masqué avec ID unique -->
                <div class="collapse small" id="${collapseId}">
                    <p>${myObject.details1}</p>
                    <p>${myObject.details2}</p>
                </div>
                <div id="separateurbis"></div>
            </div>

        </div>
    </div>`;

    divChambres.appendChild(divCont);

}

function afficherChambresFormulesLeft(myObject, index) {
    let divCont = document.createElement("div");
    divCont.className = "container-fluid";

    // Utiliser l'index pour générer des ID uniques pour chaque bouton, collapse et carousel
    const uniqueId = `collapse${index}`;
    const buttonId = `btn${index}`;
    const carouselId = `carouselExampleIndicatorsLeft${index}`;
    let image1 = myObject.image1 || "assets/images/default.jpg"; // Image de fallback
    let image2 = myObject.image2 || "assets/images/default.jpg"; // Image de fallback

    divCont.innerHTML = `
    <div class="container-fluid">
        <div class="row align-items-center">

            <div class="fond col-md-9">
                <h3>${myObject.title}</h3>
            </div>

            <div class="col-md-6 d-flex order-md-1">
                <!-- Carousel avec ID unique -->
                <div id="${carouselId}" class="carousel slide w-100 rounded-4 carouselstyle">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${image1}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${image2}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
            </div>

            <div class="col-md-6 order-md-2">
                <div id="separateurbis"></div>
                <p>${myObject.presentation}</p>
                <!-- Bouton collapse avec ID unique -->
                <button id="${buttonId}" class="btn btn-primary mt-1 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}">En savoir plus..</button>
                <!-- Contenu masqué avec ID unique -->
                <div class="collapse small" id="${uniqueId}">
                    <p>${myObject.details1}</p>
                    <p>${myObject.details2}</p>
                </div>
                <div id="separateurbis"></div>
            </div>

        </div>
    </div>`;

    divChambres.appendChild(divCont);

}

//CHAMBRES

let divChambres = document.createElement("div");
divChambres.className = "ccontainer-fluid";

divHistoire.appendChild(divChambres);

afficherChambresFormulesRight(espacesGitesObject[0], espacesGitesObject[0].id);
afficherChambresFormulesLeft(espacesGitesObject[1], espacesGitesObject[1].id);
afficherChambresFormulesRight(espacesGitesObject[2], espacesGitesObject[2].id);

//FORMULES

let divFormules = document.createElement("div");
divFormules.className = "ccontainer-fluid";

let h2FormulesCont = document.createElement("div");
h2FormulesCont.id = "separateur";
let h2Formules = document.createElement("h2");
h2Formules.innerText = "DÉCOUVREZ NOS FORMULES";

h2FormulesCont.appendChild(h2Formules);
divFormules.appendChild(h2FormulesCont);
divChambres.appendChild(divFormules);


afficherChambresFormulesLeft(formulesGitesObject[0], formulesGitesObject[0].id);
afficherChambresFormulesRight(formulesGitesObject[1], formulesGitesObject[1].id);
afficherChambresFormulesLeft(formulesGitesObject[2], formulesGitesObject[2].id);


// Animation imghistoire -- zoom
const zoomImage = document.getElementById('imghistoire');

zoomImage.addEventListener('mouseenter', () => {
    zoomImage.style.transform = 'scale(1.1)';
});


zoomImage.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'scale(1)';
});

