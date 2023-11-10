function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("Please enter Email ID.");
		}
		else if(pwd=='')
		{
        	alert("Enter the Password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6)
		{
			alert("Password should have minimum length of 6.");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Microsoft Website');
  //Redirecting to other page or webste code or you can set your own html page.
       setTimeout(window.location = "index.html",5000);
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	
	