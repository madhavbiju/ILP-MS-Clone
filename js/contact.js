const scriptURL =
  "https://script.google.com/macros/s/AKfycbw1Xk1tiXT0CO6zdS-6XWnrTbaUU7UcDd4QDs78nIz-VmwRvkoSHLiOjcE6eljWrnAC/exec";

const form = document.forms["contactForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});