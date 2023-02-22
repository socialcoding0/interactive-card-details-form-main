const confirmBtn = document.querySelector("#confirm");
const errName = document.querySelector("#nameErr");
const errNumb = document.querySelector("#nmbrErr");
const errMMYY = document.querySelector("#mmyyErr");
const errCvc = document.querySelector("#cardcvcErr");

const cardName = document.querySelector("#card-name");
const cardNumb = document.querySelector("#card-number");
const cardMM = document.querySelector("#card-mm");
const cardYY = document.querySelector("#card-yy");
const cardCvc = document.querySelector("#card-cvc");

const thanks = document.querySelector("#thanks");
thanks.style.display = "none";

confirmBtn.addEventListener("click", function (event) {
  if (cardName.value == "") {
    errName.textContent = "Can't be blank";
    cardName.style.border = "1px solid var(--Red)";
  }
  if (cardNumb.value == "") {
    errNumb.textContent = "Can't be blank";
    cardNumb.style.border = "1px solid var(--Red)";
  }
  if (cardMM.value == "") {
    errMMYY.textContent = "Can't be blank";
    cardMM.style.border = "1px solid var(--Red)";
  }
  if (cardYY.value == "") {
    errMMYY.textContent = "Can't be blank";
    cardYY.style.border = "1px solid var(--Red)";
  }
  if (cardCvc.value == "") {
    errCvc.textContent = "Can't be blank";
    cardCvc.style.border = "1px solid var(--Red)";
  }
  if (cardName.value.length != 19) {
    errNumb.textContent = "Wrong Format";
    cardNumb.style.border = "1px solid var(--Red)";
  }

  if (
    cardName.value != "" &&
    cardNumb.value != "" &&
    cardMM.value != "" &&
    cardYY.value != "" &&
    cardCvc.value != "" &&
    cardNumb.value.length == 19
  ) {
    thanks.style.display = "flex";
    document.querySelector("#form").style.display = "none";
  }

  setTimeout(() => {
    errName.textContent = "";
    cardName.style.border = "1px solid rgba(0, 0, 0, .3)";

    errNumb.textContent = "";
    cardNumb.style.border = "1px solid rgba(0, 0, 0, .3)";

    errMMYY.textContent = "";
    cardMM.style.border = "1px solid rgba(0, 0, 0, .3)";

    errMMYY.textContent = "";
    cardYY.style.border = "1px solid rgba(0, 0, 0, .3)";

    errCvc.textContent = "";
    cardCvc.style.border = "1px solid rgba(0, 0, 0, .3)";
  }, 1000);
  cardName.value = "";
  cardNumb.value = "";
  cardMM.value = "";
  cardYY.value = "";
  cardCvc.value = "";
  document.querySelector("#front-name").textContent = "JANE APPLESSED";
  document.querySelector("#front-number").textContent = "0000 0000 0000 0000";

  document.querySelector("#m").textContent = "00";

  document.querySelector("#y").textContent = "00";

  document.querySelector("#back-cvv").textContent = "000";

  event.preventDefault();
});

cardName.addEventListener("input", function () {
  let name = cardName.value;
  document.querySelector("#front-name").textContent = name.toUpperCase();

  if (cardName.value.length === 0) {
    document.querySelector("#front-name").textContent = "JANE APPLESSED";
  } else {
    document.querySelector("#front-name").textContent = cardName.value;
  }
});

cardNumb.addEventListener("input", function () {
  if (
    cardNumb.value.length == 4 ||
    cardNumb.value.length == 9 ||
    cardNumb.value.length == 14
  ) {
    cardNumb.value += " ";
  }

  if (cardNumb.value.length === 0) {
    document.querySelector("#front-number").textContent = "0000 0000 0000 0000";
  } else {
    document.querySelector("#front-number").textContent = cardNumb.value;
  }
});

cardMM.addEventListener("input", function () {
  if (cardMM.value.length === 0) {
    document.querySelector("#m").textContent = "00";
  } else {
    document.querySelector("#m").textContent = cardMM.value;
  }
});

cardYY.addEventListener("input", function () {
  if (cardYY.value.length === 0) {
    document.querySelector("#y").textContent = "00";
  } else {
    document.querySelector("#y").textContent = cardYY.value;
  }
});

cardCvc.addEventListener("input", function (event) {
  document.querySelector("#back-cvv").textContent = cardCvc.value;

  if (cardCvc.value.length === 0) {
    document.querySelector("#back-cvv").textContent = "000";
  } else {
    document.querySelector("#back-cvv").textContent = cardCvc.value;
  }
});

cardCvc.setAttribute("onkeypress", "return special(event)");
cardYY.setAttribute("onkeypress", "return special(event)");
cardMM.setAttribute("onkeypress", "return special(event)");
cardNumb.setAttribute("onkeypress", "return special(event)");
function special(e) {
  var x = e.which || e.keycode;
  if (x >= 48 && x <= 57) return true;
  else return false;
}

document.querySelector("#contiune").addEventListener("click", function () {
  thanks.style.display = "none";
  document.querySelector("#form").style.display = "flex";
});
