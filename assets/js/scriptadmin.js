/// CHARTE GRAPHIQUE RECAP 

// #191716 = NOIR
// # 440d0f = ROUGE
// # 603a40 = ROUGE --
// #84596b = ROUGE -----
// #af9bb6 = violet
document.body.style.backgroundColor = '#191716'; // Remplace #191716 par la couleur de ton choix


/////////////////////////////////////////////// MODAL DE CONNEXION /////////////////////////////////
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = '#191716';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';
modal.style.fontFamily = "Arial, sans-serif";


// CONTENU MODAL
const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#440d0f';
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '8px';
modalContent.style.textAlign = 'center';
modalContent.style.minWidth = '300px';
modalContent.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
modalContent.style.display = 'flex';
modalContent.style.flexDirection = 'column';
modalContent.style.alignItems = 'center';
modalContent.style.color = "white";
modalContent.className = 'p-4 rounded';


// TITRE
const title = document.createElement('h2');
title.textContent = 'Administration';
title.style.marginBottom = '20px';
modalContent.appendChild(title);

// USER
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.placeholder = 'Username : Entrez Admin1';
usernameInput.style.marginBottom = '10px';
usernameInput.className = 'form-control';
modalContent.appendChild(usernameInput);

// MDP
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password : Entrez password';
passwordInput.className = 'form-control';
modalContent.appendChild(passwordInput);

// BOUTON
const loginButton = document.createElement('button');
loginButton.id = "btn";
loginButton.className = 'btn btn-primary mt-5';
loginButton.innerText = "CONNEXION";
modalContent.appendChild(loginButton);

// MODAL AU CONTENU PRINCIPAL
modal.appendChild(modalContent);
document.body.appendChild(modal);

// // EVENT ON CLICK POUR AFFICHER PAGE 
// loginButton.addEventListener('click', () => {
//     console.log("click button");
//     document.body.removeChild(modal);
// });

// EVENT ON CLICK POUR AFFICHER PAGE SI UTILISATEUR ET MOT DE PASSE CORRECT
// loginButton.addEventListener('click', () => {

// if ((usernameInput.value === users[0].username && passwordInput.value === users[0].password) ||
//     (usernameInput.value === users[1].username && passwordInput.value === users[1].password) ||
//     (usernameInput.value === users[2].username && passwordInput.value === users[2].password)) {

//         document.body.removeChild(modal);
//     } else {
//         alert("Échec de la connexion : nom d'utilisateur ou mot de passe incorrect.");
// };
// });

// loginButton.addEventListener('click', () => {

//     for(let i=0; i < users.length; i++) {
        
//         if ((usernameInput.value === users[i].username) && (passwordInput.value === users[i].password)) {
//             document.body.removeChild(modal);
    
//             break;

//         } else {
//             alert("Échec de la connexion : nom d'utilisateur ou mot de passe incorrect.");
//         };

//     }
    
// }); 

loginButton.addEventListener('click', () => {

    let success = false;

    for (let i = 0; i < users.length; i++) {
        if ((usernameInput.value === users[i].username) && (passwordInput.value === users[i].password)) {
            document.body.removeChild(modal);
            success = true; // Connexion réussie
            break; // Sortir de la boucle
        }
    }

    if (!success) {
        alert("Échec de la connexion : nom d'utilisateur ou mot de passe incorrect.");
    }

});







// usernameInput.addEventListener("change", () => {console.log(usernameInput.value);})

/////////////////////////////////////////////// PAGE ADMIN /////////////////////////////////
// ELEMENT PRINCIPAL
const adminPage = document.createElement('div');
adminPage.className = 'container-fluid';

// ENTETE
const header = document.createElement('header');
header.className = 'bg-dark text-white d-flex align-items-center';
header.style.borderRadius = '0px 0px 50px 50px';

// ROW
const row = document.createElement('div');
row.className = 'row w-100';

// LOGO
const divLogo = document.createElement('div');
divLogo.className = 'col-2 d-flex justify-content-start';

const logo = document.createElement('img');
logo.src = './assets/images/logogo.png';
logo.style.width = '100px';
logo.style.height = 'auto';
divLogo.appendChild(logo);
row.appendChild(divLogo);

// TITRE 
const divTitle = document.createElement('div');
divTitle.className = 'col-8 text-center';

const titre = document.createElement('h2');
titre.innerText = 'ESPACE ADMINISTRATEUR';
titre.style.fontSize = '50px';
titre.style.marginTop = '40px';
divTitle.appendChild(titre);
row.appendChild(divTitle);

// BOUTON DECONNEXION 
const logoutCol = document.createElement('div');
logoutCol.className = 'col-2 d-flex justify-content-end';

const logout = document.createElement('button');
logout.id = "btn";
logout.className = 'btn btn-primary';
logout.innerText = 'DECONNEXION';
logoutCol.appendChild(logout);
row.appendChild(logoutCol);

// BOUTON CALENDRIER
const calendrierBtn = document.createElement("button");
row.appendChild(calendrierBtn);

const anchorCalendrierBtn = document.createElement("a");
anchorCalendrierBtn.innerText = "Calendrier des réservations";
anchorCalendrierBtn.href = "calendar.html";
anchorCalendrierBtn.style.textDecoration = "none";

calendrierBtn.appendChild(anchorCalendrierBtn);

// EVENT DECO
logout.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// ROW AU HEADER 
header.appendChild(row);
adminPage.appendChild(header);
document.body.appendChild(adminPage);



/////////////////////// RESERVATION ////////////////////////////////////////////////////////////////////////

// TITRE RÉSERVATION
const reservationTitre = document.createElement('h3');
    reservationTitre.innerText = 'TABLEAU DE BORD';
    reservationTitre.style.marginTop = '60px';
    reservationTitre.style.backgroundColor = '#af9bb6';
    reservationTitre.style.fontSize = '30px';
    reservationTitre.style.padding = '10px';
    reservationTitre.style.color = 'black';
    reservationTitre.style.borderRadius = '50px 50px 50px 50px';
    reservationTitre.style.textAlign = 'center';
    adminPage.appendChild(reservationTitre);

// TABLEAU DES RÉSERVATIONS
const table = document.createElement('table');
table.className = 'table table-striped';
table.style.marginTop = '20px';
table.style.width = '80%';
table.style.margin = '0 auto';
table.style.borderCollapse = 'collapse';
table.style.marginTop = "50px";

// EN-TÊTE DU TABLEAU
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// En-tête pour le nom
const nomChambre = document.createElement('th');
nomChambre.innerText = 'Nom';
nomChambre.style.color = 'white';
nomChambre.style.backgroundColor = '#603a40';
headerRow.appendChild(nomChambre);

// En-tête pour le statut
const statusChambre = document.createElement('th');
statusChambre.style.color = 'white'; 
statusChambre.style.backgroundColor = '#603a40'; 
statusChambre.style.display = 'flex'; 
statusChambre.style.justifyContent = 'space-between'; 
statusChambre.style.alignItems = 'center';
statusChambre.innerText = 'Statut';
statusChambre.style.color = 'white';
statusChambre.style.backgroundColor = '#603a40';
headerRow.appendChild(statusChambre);

// Texte de l'en-tête
const statusText = document.createElement('span');
statusText.innerText = 'Statut';
statusChambre.appendChild(statusText);

// Bouton de triage
const btnTri = document.createElement('button');
btnTri.innerText = '⇅'; 
btnTri.style.marginLeft = '10px';
btnTri.style.background = 'transparent';
btnTri.style.border = 'none';
btnTri.style.color = 'white';
btnTri.style.cursor = 'pointer';

// EVENT POUR TRIER
let triage = true; // Inverser le tri

btnTri.addEventListener('click', () => {
    const ligneTab = Array.from(tbody.querySelectorAll('tr')); // attrape les lignes tableau dans le tbody

    // Priorité des status
    function prioriteStatus(status) {
        switch (status) {
            case 'réservée':
                return 0;
            case 'en attente':
                return 1;
            case 'disponible':
                return 2;
            default:
                return 3;
        }
    }

    ligneTab.sort((rowA, rowB) => { // methode sort = pour trier 
        const statusA = rowA.children[1].innerText;
        const statusB = rowB.children[1].innerText; // Comparaison pour le tri

        const prioA = prioriteStatus(statusA);
        const prioB = prioriteStatus(statusB);

        return triage ? prioA - prioB : prioB - prioA;
    });

    ligneTab.forEach(row => tbody.appendChild(row));

    triage = !triage;
});

statusChambre.appendChild(btnTri);

headerRow.appendChild(statusChambre);
thead.appendChild(headerRow);
table.appendChild(thead);

// CORPS DU TABLEAU
const tbody = document.createElement('tbody');
table.appendChild(tbody);
adminPage.appendChild(table);


// Parcourir json - Recuperer info -- CHAMBRES !!!!!!
gitesObjectAdmin.forEach((chambreAdmin) => {
    const row = document.createElement('tr'); 

    // TD
    const chambres = document.createElement('td'); 
    // Récuper data dans le json ----- !!!!!!!!!!!!!!!!!!!! juste inner text = valeur !!!!!!!!!!!!!!!!!!

    chambres.innerText = chambreAdmin.name; // objet du tableau + clé
    row.appendChild(chambres); // Parent enfant

    // TD STATUS
    const chambresStatus = document.createElement('td');
    // Récuper data dans le json ----- !!!!!!!!!!!!!!!!!!!! juste inner text = valeur !!!!!!!!!!!!!!!!!!

    chambresStatus.innerText = chambreAdmin.status;
    row.appendChild(chambresStatus);

    tbody.appendChild(row);
});


// Parcourir json - Recuperer info -- ESPACES !!!!!!
espacesGitesObjectAdmin.forEach((espaceAdmin) => {
    const row = document.createElement('tr');

    const espace = document.createElement('td');
    espace.innerText = espaceAdmin.title;
    row.appendChild(espace);

    const espaceStatus = document.createElement('td');
    espaceStatus.innerText = espaceAdmin.status;
    row.appendChild(espaceStatus);
    tbody.appendChild(row);
});



// Parcourir json - Recuperer info -- FORMULES !!!!!! -- TEST AVEC FOR 
for (let i = 0; i < formulesGitesObjectAdmin.length; i++) {
    const formuleAdmin = formulesGitesObjectAdmin[i];
    const row = document.createElement('tr');

    const formule = document.createElement('td');
    formule.innerText = formuleAdmin.title;
    row.appendChild(formule);

    const formuleStatus = document.createElement('td');
    formuleStatus.innerText = formuleAdmin.status;
    row.appendChild(formuleStatus);
    tbody.appendChild(row);
}

/////////////////////// LISTE CLIENT AVEC CONTACT ////////////////////////////////////////////////////////////////////////

// TITRE LISTE CLIENTS
const clientTitre = document.createElement('h3');
clientTitre.innerText = 'LISTE DES CLIENTS';
clientTitre.style.marginTop = '60px';
clientTitre.style.backgroundColor = '#af9bb6';
clientTitre.style.fontSize = '30px';
clientTitre.style.padding = '10px';
clientTitre.style.color = 'black';
clientTitre.style.borderRadius = '50px';
clientTitre.style.textAlign = 'center';
document.body.appendChild(clientTitre);

// TABLE CLIENT
const tableClient = document.createElement('table');
tableClient.className = 'table table-striped';
tableClient.style.marginTop = '20px';
tableClient.style.width = '80%'; 
tableClient.style.margin = '0 auto'; 
tableClient.style.borderCollapse = 'collapse';

// PARENT ENFANT
const theadClient = document.createElement('thead');
const headerRowClient = document.createElement('tr');

// ENTETE TABLE
const headersClients = ['ID', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Date de réservation', 'Espace'];
headersClients.forEach(headerText => {
    const th = document.createElement('th');
    th.innerText = headerText;
    th.style.border = '1px solid #ccc';
    th.style.padding = '10px';
    th.style.textAlign = 'left';
    headerRowClient.appendChild(th);
});
theadClient.appendChild(headerRowClient);
tableClient.appendChild(theadClient);


const tbodyClient = document.createElement('tbody');

// Boucle lecture --- JSON --- CLIENTS 
clients.forEach(clients => {
    const rowClient = document.createElement('tr');
    
    // CELLULES TAB 
    const tdId = document.createElement('td');
    tdId.innerText = clients.id;
    const tdNom = document.createElement('td');
    tdNom.innerText = clients.nom;
    const tdPrenom = document.createElement('td');
    tdPrenom.innerText = clients.prenom;
    const tdEmail = document.createElement('td');
    tdEmail.innerText = clients.mail;
    const tdTelephone = document.createElement('td');
    tdTelephone.innerText = clients.telephone;
    const tdDateReservation = document.createElement('td');
    tdDateReservation.innerText = clients.datereservation;
    const chClientsResa =  document.createElement('td');
    chClientsResa.innerText = clients.espacereverve;


    rowClient.append(tdId, tdNom, tdPrenom, tdEmail, tdTelephone, tdDateReservation, chClientsResa);
    
  
    tbodyClient.appendChild(rowClient);
});

tableClient.appendChild(tbodyClient);


document.body.appendChild(tableClient); 



/////////////////////// REPONSE FORMULAIRE CONTACT ////////////////////////////////////////////////////////////////////////
// TITRE REPONSE CLIENTS
const formReponseClients = document.createElement('h3');
formReponseClients.innerText = 'REPONSE CLIENTS';
formReponseClients.style.marginTop = '60px';
formReponseClients.style.backgroundColor = '#af9bb6';
formReponseClients.style.fontSize = '30px';
formReponseClients.style.padding = '10px';
formReponseClients.style.color = 'black';
formReponseClients.style.borderRadius = '50px';
formReponseClients.style.textAlign = 'center';
document.body.appendChild(formReponseClients);


// FORMULAIRE
const form = document.createElement('form');
form.style.maxWidth = '800px';
form.style.margin = '20px auto';
form.style.padding = '10px';
form.style.border = '1px solid #440d0f';
form.style.borderRadius = '10px';
form.style.backgroundColor = 'black';
form.style.marginTop = "50px";


// INPUT NAME
const reservationInput = document.createElement('input');
reservationInput.type = 'text';
reservationInput.placeholder = 'Nom du client';
reservationInput.style.width = '100%';
reservationInput.style.marginBottom = '10px';
reservationInput.style.padding = '8px';
form.appendChild(reservationInput);

// INPUT RESPONSE
const responseInput = document.createElement('textarea');
responseInput.placeholder = 'Votre réponse au client';
responseInput.style.width = '100%';
responseInput.style.marginBottom = '10px';
responseInput.style.padding = '8px';
form.appendChild(responseInput);

// BOUTON FORM
const btnForm = document.createElement('button');
btnForm.innerText = 'Envoyer la réponse';
btnForm.type = 'submit';
btnForm.style.backgroundColor = '#440d0f';
btnForm.style.color = 'white';
btnForm.style.padding = '10px';
btnForm.style.border = 'none';
btnForm.style.borderRadius = '5px';
btnForm.style.width = '100%';
form.appendChild(btnForm);

document.body.appendChild(form);
