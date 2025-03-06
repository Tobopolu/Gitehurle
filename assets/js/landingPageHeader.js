
// HEADER
let header = document.createElement("header");
header.className = "background";
document.body.insertBefore(header, document.body.firstChild);

let nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg header";
header.appendChild(nav);

let divContainer = document.createElement("div");
divContainer.className = "container";
nav.appendChild(divContainer);

let aLogo = document.createElement("a");
aLogo.className = "navbar-brand";
aLogo.href = "index.html";
divContainer.appendChild(aLogo);

let imgLogo = document.createElement("img");
imgLogo.className = "img-fluid";
imgLogo.src = "assets/images/logogo.png";
imgLogo.alt = "Logo gite";
imgLogo.width = "100"; 
imgLogo.height = "50";
aLogo.appendChild(imgLogo);

let btnToggle = document.createElement("button");
btnToggle.className = "navbar-toggler";
btnToggle.type = "button";
// button.setAttribute("data-bs-toggle", "collapse");
// button.setAttribute("data-bs-target", "#navbarNav");
// button.setAttribute("aria-controls", "navbarNav");
// button.setAttribute("aria-expanded", "false");
// button.setAttribute("aria-label", "Toggle navigation");
divContainer.appendChild(btnToggle);

let spanBtnToggle = document.createElement("span");
spanBtnToggle.className = "navbar-toggler-icon";
btnToggle.appendChild(spanBtnToggle);

btnToggle.addEventListener('click', function () {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('show');
});

let divNav = document.createElement("div");
divNav.className = "collapse navbar-collapse";
divNav.id = "navbarNav";
divContainer.appendChild(divNav);

let ulNav = document.createElement("ul");
ulNav.className = "navbar-nav ms-auto";
divNav.appendChild(ulNav);

let liAccueil = document.createElement("li");
liAccueil.className = "nav-item";
ulNav.appendChild(liAccueil);

let aAccueil = document.createElement("a");
aAccueil.className = "nav-link";
aAccueil.innerText = "Accueil";
aAccueil.href = "index.html"
// aAccueil.setAttribute("aria-current", "page");
liAccueil.appendChild(aAccueil);

let liServices = document.createElement("li");
liServices.className = "nav-item";
ulNav.appendChild(liServices);

let aServices = document.createElement("a");
aServices.className = "nav-link";
aServices.innerText = "Nos Services";
aServices.href = "index.html#reservation"
liServices.appendChild(aServices);

let liReservation = document.createElement("li");
liReservation.className = "nav-item";
ulNav.appendChild(liReservation);

let aReservation = document.createElement("a");
aReservation.className = "nav-link";
aReservation.innerText = "Réservation";
aReservation.href = "reservation.html"
liReservation.appendChild(aReservation);

let liContact = document.createElement("li");
liContact.className = "nav-item";
ulNav.appendChild(liContact);

let aContact = document.createElement("a");
aContact.className = "nav-link";
aContact.innerText = "Contact";
aContact.href = "formulaire.html"
liContact.appendChild(aContact);


// MAIN


// FOOTER
let footer = document.createElement("footer");
footer.className = "text-white";
document.body.insertBefore(footer, main.nextSibling);



let footerDivContainer = document.createElement("div");
footerDivContainer.className = "container py-4";
footer.appendChild(footerDivContainer);

let footerDivRow = document.createElement("div");
footerDivRow.className = "row";
footerDivContainer.appendChild(footerDivRow);

let footerDivColA = document.createElement("div");
footerDivColA.className = "col-md-6";
footerDivRow.appendChild(footerDivColA);

let footerDivColATitle = document.createElement("h5");
footerDivColATitle.innerText = "A propos"
footerDivColA.appendChild(footerDivColATitle);

let footerDivColAP = document.createElement("p");
footerDivColAP.innerText = "Bienvenue dans notre gîte! Profitez d'un séjour chaleureux et authentique au cœur de la nature, où confort et convivialité vous attendent."
footerDivColA.appendChild(footerDivColAP);

let footerDivColB = document.createElement("div");
footerDivColB.className = "col-md-3";
footerDivRow.appendChild(footerDivColB);

let footerDivColBTitle = document.createElement("h5");
footerDivColBTitle.innerText = "Liens"
footerDivColB.appendChild(footerDivColBTitle);

let footerDivColBUl = document.createElement("ul");
footerDivColBUl.className = "list-unstyled";
footerDivColB.appendChild(footerDivColBUl);

let footerDivColBLi1 = document.createElement("li");
footerDivColBUl.appendChild(footerDivColBLi1);

let footerDivColBLi1a = document.createElement("a");
footerDivColBLi1a.href = "index.html";
footerDivColBLi1a.className = "text-white";
footerDivColBLi1a.innerText = "Accueil";
footerDivColBLi1.appendChild(footerDivColBLi1a);

let footerDivColBLi2 = document.createElement("li");
footerDivColBUl.appendChild(footerDivColBLi2);

let footerDivColBLi2a = document.createElement("a");
footerDivColBLi2a.href = "reservation.html";
footerDivColBLi2a.className = "text-white";
footerDivColBLi2a.innerText = "Nos Services";
footerDivColBLi2.appendChild(footerDivColBLi2a);

let footerDivColBLi3 = document.createElement("li");
footerDivColBUl.appendChild(footerDivColBLi3);

let footerDivColBLi3a = document.createElement("a");
footerDivColBLi3a.href = "#";
footerDivColBLi3a.className = "text-white";
footerDivColBLi3a.innerText = "Réservation";
footerDivColBLi3.appendChild(footerDivColBLi3a);

let footerDivColBLi4 = document.createElement("li");
footerDivColBUl.appendChild(footerDivColBLi4);

let footerDivColBLi4a = document.createElement("a");
footerDivColBLi4a.href = "formulaire.html";
footerDivColBLi4a.className = "text-white";
footerDivColBLi4a.innerText = "Contact";
footerDivColBLi4.appendChild(footerDivColBLi4a);

let footerDivColBLi5 = document.createElement("li");
footerDivColBUl.appendChild(footerDivColBLi5);

let footerDivColBLi5a = document.createElement("a");
footerDivColBLi5a.href = "admin.html";
footerDivColBLi5a.className = "text-white";
footerDivColBLi5a.innerText = "Espace administrateur";
footerDivColBLi5.appendChild(footerDivColBLi5a);

let footerDivColC = document.createElement("div");
footerDivColC.className = "col-md-3";
footerDivRow.appendChild(footerDivColC);

let footerDivColCTitle = document.createElement("h5");
footerDivColCTitle.innerText = "Contact"
footerDivColC.appendChild(footerDivColCTitle);

let footerDivColCUl = document.createElement("ul");
footerDivColCUl.className = "list-unstyled";
footerDivColC.appendChild(footerDivColCUl);

let footerDivColCLi1 = document.createElement("li");
footerDivColCUl.appendChild(footerDivColCLi1);

let footerDivColCLi1a = document.createElement("a");
footerDivColCLi1a.href = "mailto:adresse@example.com";
footerDivColCLi1a.target = "_blank";
footerDivColCLi1a.className = "text-white";
footerDivColCLi1a.innerText = "Envoyez-nous un mail";
footerDivColCLi1.appendChild(footerDivColCLi1a);

let footerDivColCLi2 = document.createElement("li");
footerDivColCUl.appendChild(footerDivColCLi2);

let footerDivColCLi2a = document.createElement("a");
footerDivColCLi2a.href = "http://maps.google.com/?q=1200 Village, 48700 Les Laubies";
footerDivColCLi2a.target = "_blank";
footerDivColCLi2a.className = "text-white";
footerDivColCLi2a.innerText = "Village, 48700 Les Laubies";
footerDivColCLi2.appendChild(footerDivColCLi2a);

let footerDivColCLi3 = document.createElement("li");
footerDivColCUl.appendChild(footerDivColCLi3);

let footerDivColCLi3a = document.createElement("a");
footerDivColCLi3a.href = "tel:0000000000";
footerDivColCLi3a.target = "_blank";
footerDivColCLi3a.className = "text-white";
footerDivColCLi3a.innerText = "00 00 00 00 00";
footerDivColCLi3.appendChild(footerDivColCLi3a);


let footerDivCopy = document.createElement("div");
footerDivCopy.className = "text-center mt-3";
footerDivContainer.appendChild(footerDivCopy);

let footerDivCopyP = document.createElement("p");
footerDivCopyP.innerHTML = "&copy; 2024 GITHURLE-B. Tous droits réservés.";
footerDivCopy.appendChild(footerDivCopyP);