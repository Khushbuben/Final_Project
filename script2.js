


function validateform4()
{  
var fname=document.myform.fname.value;  
var lname=document.myform.lname.value;  
var email=document.myform.email.value;  
var password=document.myform.password.value;  
var cpassword=document.myform.cpassword.value;  
var uname=document.myform.uname.value;  
  
  
  if (fname==null || fname==""){  
  alert("First Name can't be blank");  
  return false;  
}

   if (lname==null || lname==""){  
  alert("Last Name can't be blank");  
  return false;  
   }

   if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;  
   
   }
   
   
   if (email.indexOf('@')<=0){  
  alert("invalid email");  
  return false;  
   
   }
   
   
   
   if (password.length<6){  
  alert("Password must be at least 6 characters and enter same password.");  
  
  return flase;  
   
   }
   
   if(password!=cpassword)
   {
	   alert("password not matching.");  
  
  return flase; 
   }
   
   if(cpassword == "")
   {
    alert("enter confirm password");  
    return false;
   }
   
   if(uname == "")
   {
    alert("enter user name");  
    return false;
   }


  else 
  { 
alert("Sign Up");
  }
  
}  



