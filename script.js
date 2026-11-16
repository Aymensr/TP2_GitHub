// Récupération des éléments de la page
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const message = document.getElementById("message");

// Afficher la longueur choisie quand on bouge le curseur
lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

// Générer le mot de passe
function generatePassword() {
  let characters = "";

  if (uppercase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers.checked) characters += "0123456789";
  if (symbols.checked) characters += "!@#$%^&*()-_=+[]{}<>?";

  if (characters === "") {
    message.textContent = "Choisissez au moins une option.";
    passwordInput.value = "";
    return;
  }

  message.textContent = "";
  let password = "";
  for (let i = 0; i < lengthInput.value; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  passwordInput.value = password;
}

// Copier dans le presse-papiers
function copyPassword() {
  if (passwordInput.value === "") {
    message.textContent = "Générez d'abord un mot de passe.";
    return;
  }
  navigator.clipboard.writeText(passwordInput.value);
  message.textContent = "Mot de passe copié !";
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);