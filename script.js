let contacts = []; // Array per memorizzare tutti i contatti

function addContact() {
  // Prende i valori dei 3 campi input e rimuove spazi vuoti
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  // Se uno dei campi è vuoto, interrompe la funzione
  if (!name || !phone || !email) return;

  // Crea un oggetto contatto con ID univoco
  const contact = {
    id: Date.now(), // ID basato sul timestamp attuale
    name: name,
    phone: phone,
    email: email
  };

  contacts.push(contact); // Aggiunge il contatto all’array
  renderContacts(); // Aggiorna la lista visiva dei contatti
  clearForm(); // Svuota i campi input
}

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = ""; // Pulisce la lista prima di reinserirla

  contacts.forEach(contact => {
    const li = document.createElement("li"); // Crea un nuovo elemento <li>

    // Inserisce i dati del contatto + pulsante elimina
    li.innerHTML = `
      <strong>${contact.name}</strong><br>
      📞 ${contact.phone}<br>
      ✉️ ${contact.email}
      <button onclick="deleteContact(${contact.id})">Elimina</button>
    `;

    list.appendChild(li); // Aggiunge il contatto alla lista
  });
}

function deleteContact(id) {
  // Filtra tutti i contatti tranne quello con l’ID corrispondente
  contacts = contacts.filter(contact => contact.id !== id);
  renderContacts(); // Riaggiorna la lista
}

function clearForm() {
  // Svuota i campi di input dopo l’aggiunta
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}
