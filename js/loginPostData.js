// loginPostData.js

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

  // Simulate sending the data to a server for authentication
  // In a real-world scenario, you'd send this data securely to a server.
  // For the sake of this example, let's just log the values to the console.
  console.log("Email:", email);
  console.log("Password:", password);

  // Here you can add code to make an AJAX request to your server for authentication.
  // For simplicity, this example just shows the collected data in the console.
  // Replace the following lines with your actual authentication logic.

  // Example AJAX request using fetch API
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      console.log("Authentication Response:", data);
      setTimeout((window.location = "index.html"), 5000);
      alert("Thank You for Login & You are Redirecting to Microsoft Website");
      // You can redirect the user or perform other actions based on the response.
    })
    .catch((error) => {
      console.error("Error during authentication:", error);
      setTimeout((window.location = "index.html"), 5000);
      alert("Thank You for Login & You are Redirecting to Microsoft Website");
    });
}
