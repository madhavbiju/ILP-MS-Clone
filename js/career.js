document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["career-form"];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz668J322xkHLn2guz1wYHlqn3cf_R_67eiLzPqzy_kyI7d9ZiqFZDWXj9spMM3X-P9/exec";

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Thank you! Your form is submitted successfully.");

        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during submission.");
      });
  });
});
