const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyDq4suUqbB4Eq8wQvnD-OHAZ1HePq-2XUM",
    authDomain: "contacto-38788.firebaseapp.com",
    databaseURL: "https://contacto-38788-default-rtdb.firebaseio.com",
    projectId: "contacto-38788",
    storageBucket: "contacto-38788.appspot.com",
    messagingSenderId: "203855470231",
    appId: "1:203855470231:web:9566af8924e8ee63a593d2"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
