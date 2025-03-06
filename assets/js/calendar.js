const main = document.getElementById("main");

// H2 CALENDRIER DES RESERVATIONS

const h2Title = document.createElement("h2");
h2Title.innerText = "Calendrier des réservations";
main.append(h2Title);

// TABLEAU DU CALENDRIER

const tabContRows = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const tabContRows1 = ["30", "01", "02", "03", "04", "05", "06"];
const tabContRows2 = ["07", "08", "09", "10", "11", "12", "13"];
const tabContRows3 = ["14", "15", "16", "17", "18", "19", "20"];
const tabContRows4 = ["21", "22", "23", "24", "25", "26", "27"];
const tabContRows5 = ["28", "29", "30", "31", "01", "02", "03"];

function createTab (pElement, array, rows) {
    
    const tabCalendar = document.createElement("table");
    tabCalendar.className = "container";
    pElement.append(tabCalendar);
    const tBodyCalendar = document.createElement("tbody");
    tabCalendar.append(tBodyCalendar);

    for(let i=0; i<rows; i++) {

        const tr = document.createElement("tr");
        
        for(let v of array) {
            const td = document.createElement("td");
            td.style.border = "2px solid black";
            td.style.paddingRight = "5vw";
            td.style.paddingLeft = "5vw";
            td.innerText = v;
            tr.append(td);
        }

        tabCalendar.append(tr);

    }

}

createTab(main, tabContRows, 1);
createTab(main, tabContRows1, 1);
createTab(main, tabContRows2, 1);
createTab(main, tabContRows3, 1);
createTab(main, tabContRows4, 1);
createTab(main, tabContRows5, 1);
