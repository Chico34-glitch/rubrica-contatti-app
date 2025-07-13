// Funzione principale per aggiungere un nuovo contatto
function aggiungiContatto() {
  const name = document.getElementById("name").value.trim();     // Ottiene il valore del campo nome
  const phone = document.getElementById("phone").value.trim();   // Ottiene il telefono
  const email = document.getElementById("email").value.trim();   // Ottiene l'email

  // Controlla che tutti i campi siano compilati
  if (!name || !phone || !email) {
    alert("Inserisci tutti i campi!");
    return;
  }

  // Crea un nuovo elemento <li> per contenere il contatto
  const li = document.createElement("li");

  // Crea il div che contiene solo le info testuali del contatto
  const infoDiv = document.createElement("div");
  infoDiv.className = "contact-info";
  infoDiv.textContent = `${name} - ${phone} - ${email}`;

  // Crea il bottone "Elimina"
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Elimina";

  // Aggiunge l'evento al bottone per rimuovere il contatto
  deleteBtn.onclick = function () {
    li.remove(); // Rimuove il contatto dalla lista
  };

  // Costruisce l'elemento <li> con testo + bottone
  li.appendChild(infoDiv);
  li.appendChild(deleteBtn);

  // Aggiunge il nuovo contatto alla lista in pagina
  document.getElementById("contactList").appendChild(li);

  // Svuota i campi del modulo
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}
