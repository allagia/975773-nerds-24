var button = document.querySelector(".button-form");
var popup = document.querySelector (".write-us-form");
var yourName = popup.querySelector("[name=your-name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=letter]");
var close = popup.querySelector(".form-close");
var form = document.querySelector(".write-us-form");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("yourName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.remove("form-show");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-show");
  yourName.focus();
  if (storageName) {
    yourName.value = storageName;
    email.focus();
    }
  if (storageEmail) {
    email.value = storageEmail;
    text.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value || !email.value || !text.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя, эл. почту и текст сообщения");
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("email", email.value);
    }
  }
});




// var button = document.querySelector(".general-button");
// var popup = document.querySelector(".filter");
// var toggleClassPopup = function () {

//   popup.classList.toggle("filter-show");
// }
// var arrivalDate = popup.querySelector("[name=arrival-date]");
// var form = document.querySelector(".filter");
// var departureDate = popup.querySelector("[name=departure-date]");
// var adults = popup.querySelector("[name=adults]");
// var children = popup.querySelector("[name=children]");
// var isStorageSupport = true;
// var storageAdults = "";
// var storageChildren = "";

// try {
//   storageAdults = localStorage.getItem("adults");
//   storageChildren = localStorage.getItem("children");
// } catch (err) {
//   isStorageSupport = false;
// }

// toggleClassPopup();

// button.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("filter-error");
//   toggleClassPopup();
//   arrivalDate.focus();
//   if (storageAdults) {
//     adults.value = storageAdults;
//   }
//   if (storageChildren) {
//     children.value = storageChildren;
//   }
// });

// form.addEventListener("submit", function (evt) {
//   if (!arrivalDate.value || !departureDate.value || !adults.value || !children.value) {
//     evt.preventDefault();
//     console.log("Нужно ввести дату заезда, дату выезда, количество взрослых и детей");
//     popup.classList.remove("filter-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("filter-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("adults", adults.value);
//       localStorage.setItem("children", children.value);
//     }
//   }
// });
