window.addEventListener("DOMContentLoaded", (event) => {
//Phase 1A:
//Title
const formTitle = document.getElementById("title");
const cardTitle = document.getElementById("card-title");

formTitle.addEventListener("input", (event) => {
    cardTitle.innerHTML = event.target.value
});

//First Name
const formFirstName = document.getElementById("first-name");
const cardFirstName = document.getElementById("card-first-name");

formFirstName.addEventListener("input", (event) => {
    cardFirstName.innerHTML = event.target.value
});

//Last Name
const formLastName = document.getElementById("last-name");
const cardLastName = document.getElementById("card-last-name");

formLastName.addEventListener("input", (event) => {
    cardLastName.innerHTML = event.target.value
});

// Eye Color
const formEyeColor = document.getElementById("eye-color");
const cardEyeColor = document.getElementById("card-eye-color");

formEyeColor.addEventListener("input", (event) => {
    cardEyeColor.innerHTML = event.target.value
});

//Height
const formHeight = document.getElementById("height");
const cardHeight = document.getElementById("card-height");

formHeight.addEventListener("input", (event) => {
    cardHeight.innerHTML = event.target.value
});

//License Number
const formLicenseNumber = document.getElementById("license-num");
const cardLicenseNumber = document.getElementById("card-license-num");

formLicenseNumber.addEventListener("input", (event) => {
    cardLicenseNumber.innerHTML = event.target.value
});

//License Number Confirm 

//Organ Donor 
const formOrganDonor = document.getElementById("donor-status");
const cardOrganDonor = document.getElementById("card-donor-status");

formOrganDonor.addEventListener("click", (event) => {
  if (formOrganDonor.checked){
    cardOrganDonor.innerHTML = "Yes"
  } else {
    cardOrganDonor.innerHTML = "No"
  }
});

// ** Phase 1B: Update license with event delegation and event.target ** 


// ** Phase 2: Add focus and blur events to form inputs **
 const allFormElements = document.querySelectorAll(".form__input")
let one = allFormElements.forEach(element => {
  return element
});

one.document.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "lightgreen"
    

}, true);


// ** Phase 3: Check that license numbers match **
 

// ** Phase 4: Update submit button click count **

 
});