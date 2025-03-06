 // Variáveis globais para armazenar as datas e a diferença em dias
 let data_init = null;
 let data_end = null;
 let diferencaEmDias = null;
// Objeto para armazenar os detalhes da reserva
  const reservationDetails = {
    data_espace: null,
    data_price: null
};

 // Função para criar os cards de "chambres"
 function createChambreCard(chambre) {
     const chambreCard = document.createElement("div");
     chambreCard.className = "col";
     chambreCard.id = chambre.id;

     chambreCard.innerHTML = `
         <div class="card shadow-sm">
             <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${chambre.image}" alt="Image 1">
             <div class="card-body">
             <h4>${chambre.name}</h4> 
                 <ul class="card-text">
                 ${chambre.description.map(item => item ? `<li>${item}</li>` : '').join('')}
                 </ul>
                 <div class="d-flex justify-content-end align-items-center">
                     <button id="btn" class="btn btn-sm text-white openModal" data-bs-toggle="modal" data-bs-target="#modalReservation" data-price="${chambre.price}" data-espace="${chambre.name}" type="button">Réservation</button>
                 </div>
             </div>
         </div>
     `;
     return chambreCard;
 }

 // Adiciona os cards no DOM
 const list_chambres = document.getElementById("list-chambres");
 gitesObject.forEach((chambre) => {
     const chambreCard = createChambreCard(chambre);
     list_chambres.appendChild(chambreCard);
 });

 // Função para calcular a diferença de dias entre as datas
 function calcularDiferenca() {
     const dateInitInput = document.getElementById('dateInit');
     const dateEndInput = document.getElementById('dateEnd');

     data_init = dateInitInput.value;
     data_end = dateEndInput.value;

     if (!data_init || !data_end) return;

     const d1 = new Date(data_init);
     const d2 = new Date(data_end);

     if (d1 >= d2) {
         alert("La date de début doit être antérieure à la date de fin.");
         diferencaEmDias = null;
         return;
     }

     const diferencaEmMilissegundos = d2 - d1;
     diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
     atualizarTotal();
 }

 // Função para atualizar o total no modal
 function atualizarTotal() {
    const totalElement = document.getElementById('total_cart');
    if (reservationDetails.data_price && diferencaEmDias) {
        const totaldias = Number(reservationDetails.data_price) * diferencaEmDias;
        totalElement.textContent = `Total : (Є) ${totaldias}`;
    } else {
        totalElement.textContent = `Total : (Є) 0`;
    }
}

 // Adiciona os listeners para as inputs de data
 const dateInitInput = document.getElementById('dateInit');
 const dateEndInput = document.getElementById('dateEnd');
 dateInitInput.addEventListener('change', calcularDiferenca);
 dateEndInput.addEventListener('change', calcularDiferenca);

 function handleClick(event) {
    const clickedButton = event.currentTarget;
    reservationDetails.data_espace = clickedButton.getAttribute('data-espace');
    reservationDetails.data_price = clickedButton.getAttribute('data-price');

    // Atualiza o total sempre que o modal é aberto
    atualizarTotal();
}

// Espera o DOM carregar antes de adicionar os listeners
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".openModal");
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});

 // Lida com o envio do formulário
 document.querySelector("#form").addEventListener("submit", function(event) {
     event.preventDefault();

     const formData = new FormData(this);
     const formValues = {};

     // Converte FormData para um objeto mais legível
     formData.forEach((value, key) => {
         formValues[key] = value;
     });

     // Adiciona os dados da reserva ao formValues
     formValues['data_espace'] = reservationDetails.data_espace;
     formValues['data_price'] = reservationDetails.data_price;

     // Valida os campos do formulário
     if (!formValues['nom'] || !formValues['prenom'] || !formValues['email'] || !formValues['formules'] ||
         !formValues['dateInit'] || !formValues['dateEnd']) {
         alert('Veuillez remplir tous les champs.');
         return;
     }

     // Exibe os dados no console (poderia ser enviado para um backend aqui)
     console.log(formValues);

     Swal.fire({
         title: "Merci de votre attention!",
         text: "Votre réservation a été acceptée et nous vous enverrons les détails par e-mail.",
         icon: "success"
     }).then(function() { 
         location.reload();
     });
 });