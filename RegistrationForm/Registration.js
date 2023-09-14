
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var urlInput = document.querySelector("#url");
var imgurlInput = document.querySelector("#url2");
var genderInputs = document.getElementsByName("gender");
var checkInputs = document.getElementsByName("check");

var checkbox = document.querySelector(".b");
var submitButton = document.querySelector("#red");
var clearButton = document.querySelector("#green");
var cardContainer = document.querySelector(".card");
var nameParagraph = document.querySelector("#a1");
var emailParagraph = document.querySelector("#b2");
var websiteParagraph = document.querySelector("#c3");
var genderParagraph = document.querySelector("#d4");
var enrollmentParagraph = document.querySelector("#e5");
var enrollInput = document.querySelector("#enroll");


function handleFormSubmission() {
  submitButton.addEventListener("click", function () {
    
    if (
      nameInput.value.length === 0 ||
      emailInput.value.length === 0 ||
      urlInput.value.length === 0 ||
      imgurlInput.value.length === 0 ||
      !validateGender()
    ) {
      alert("Please fill in all the fields and select a gender.");
    } else {
      
      var selectedGender = getSelectedGender();


      cardContainer.innerHTML += `<div class="card">
         <div class="photo"><img src="${imgurlInput.value}" alt=""></div>
         <p class="a" id="a1">Name: ${nameInput.value}</p>
         <p class="a" id="b2">Email: ${emailInput.value}</p>
         <p class="a" id="c3">Website: ${urlInput.value}</p>
         <p class="a" id="d4">Gender: ${selectedGender}</p>
         <p class="a" id="e5">Enrollment No: ${enrollInput.value}</p>
     </div>`;

      
      clearInputFields();
    }
  });
}


function validateGender() {
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      return true;
    }
  }
  return false;
}


function getSelectedGender() {
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      return genderInputs[i].value;
    }
  }
  return "";
}


function clearInputFields() {
  nameInput.value = "";
  emailInput.value = "";
  urlInput.value = "";
  imgurlInput.value = "";
  enrollInput.value = "";
  clearGenderSelection();
}


function clearGenderSelection() {
  for (var i = 0; i < genderInputs.length; i++) {
    genderInputs[i].checked = false;
  }
}
handleFormSubmission();
