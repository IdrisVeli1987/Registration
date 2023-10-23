
// Mətn sahəsi
function getInput(placeholder, type, claaName) {
  let input = document.createElement("input");
  input.placeholder = placeholder;
  input.type = type;
  input.classList.add(claaName);
  return input;
}

// Mətn sahəsi üçün blok
let box = document.createElement("div");
box.classList.add("box");

// Basliq
let title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Qeydiyyat";

// Soyad ucun bloku
let surnameInpWrap = document.createElement("div");
surnameInpWrap.classList.add("field-wrap");
let surnameInp = getInput("Soyad", "text", "text-field");
let surnameErrLabel = document.createElement("label");
surnameErrLabel.classList.add("err");
surnameInpWrap.append(surnameInp, surnameErrLabel);

// Ad ucun blok
let nameInpWrap = document.createElement("div");
nameInpWrap.classList.add("field-wrap");
let nameInp = getInput("Ad", "text", "text-field");
let nameErrLabel = document.createElement("label");
nameErrLabel.classList.add("err");
nameInpWrap.append(nameInp, nameErrLabel);

// Yas ucun blok
let ageInpWrap = document.createElement("div");
ageInpWrap.classList.add("field-wrap");
let ageInp = getInput("Yaş", "number", "text-field");
let ageErrLabel = document.createElement("label");
ageErrLabel.classList.add("err");
ageInpWrap.append(ageInp, ageErrLabel);

// Email ucun blok
let emailInpWrap = document.createElement("div");
emailInpWrap.classList.add("field-wrap");
let emailInp = getInput("E-mail", "email", "text-field");
let emailErrLabel = document.createElement("label");
emailErrLabel.classList.add("err");
emailInpWrap.append(emailInp, emailErrLabel);

// Sifre ucun blok
let passwordInpWrap = document.createElement("div");
passwordInpWrap.classList.add("field-wrap");
let passwordInp = getInput("Şifrə", "password", "text-field");
let passwordErrLabel = document.createElement("label");
passwordErrLabel.classList.add("err");
passwordInpWrap.append(passwordInp, passwordErrLabel);

// Sertlerle razilasma bloku
let conditionLabelWrap = document.createElement("div");
conditionLabelWrap.classList.add("field-wrap");
let conditionLabel = document.createElement("label");
conditionLabel.classList.add("condition");
let conditionInp = document.createElement("input");
conditionInp.type = "checkbox";
let conditionErrLabel = document.createElement("label");
conditionErrLabel.classList.add("err");
conditionLabelWrap.append(conditionLabel, conditionErrLabel);

let conditionSpan = document.createElement("span");
conditionSpan.textContent = "Şərtlər ilə razisiz?";

conditionLabel.append(conditionInp, conditionSpan);

// Düymə
let regBtn = document.createElement("button");
regBtn.classList.add("btn");
regBtn.textContent = "Qeydiyyatdan kecin";

regBtn.onclick = function () {
  let surnameValue = surnameInp.value;
  let nameValue = nameInp.value;
  let ageValue = +ageInp.value;
  let emailValue = emailInp.value;
  let passwordValue = passwordInp.value;
  let conditionValue = conditionInp.checked;

  let validationResult = false;

  // Soyadin yoxlanmasi
  surnameErrLabel.textContent = "";
  if (surnameValue === "") {
    surnameErrLabel.textContent = "Soyadi daxil edin";
    validationResult = true;
  }

  if (surnameValue.length <= 1) {
    surnameErrLabel.textContent = "Duzgun soyadinizi daxil edin";
    validationResult = true;
  }

  // Adin yoxlanmasi
  nameErrLabel.textContent = "";
  if (nameValue === "") {
    nameErrLabel.textContent = "Adi daxil edin";
    validationResult = true;
  }

  if (nameValue.length <= 1) {
    nameErrLabel.textContent = "Duzgun adinizi daxil edin";
    validationResult = true;
  }

  // Yasin yoxlanmasi
  ageErrLabel.textContent = "";
  if (ageValue === 0) {
    ageErrLabel.textContent = "Yasinizi daxil edin";
    validationResult = true;
  }

  if (ageValue < 18) {
    ageErrLabel.textContent = "Sizin 18 yasiniz tamam olmayib";
    validationResult = true;
  }

  // Email yoxlanmasi
  emailErrLabel.textContent = "";
  if (emailValue === "" || emailValue.includes("@") === false) {
    emailErrLabel.textContent = "Email daxil edin";
    validationResult = true;
  }

  if (emailValue.length <= 1) {
    emailErrLabel.textContent = "Duzgun emailinizi daxil edin";
    validationResult = true;
  }

  // sifrenin yoxlanmasi
  passwordErrLabel.textContent = "";
  if (passwordValue === "") {
    passwordErrLabel.textContent = "Sifre daxil edin";
    validationResult = true;
  }

  if (passwordValue.length < 8 || passwordValue.includes("_") === false) {
    passwordErrLabel.textContent = "Duzgun sifre daxil edin";
    validationResult = true;
  }

  // raziliq bloku
  conditionErrLabel.textContent = "";
  if (conditionValue === false) {
    conditionErrLabel.textContent = "Siz sertler ile razi deyilsiz";
    validationResult = true;
  }

  if (validationResult === true) {
    return;
  }
  alert(`${surnameValue} ${nameValue}, tebrikler. Siz qeydiyyatdan kecdiz`);
};

box.append(
  title,
  surnameInpWrap,
  nameInpWrap,
  ageInpWrap,
  emailInpWrap,
  passwordInpWrap,
  conditionLabelWrap,
  regBtn
);

document.body.append(box);
