function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email  == ""|| message  ==""){
      alert("Please fill the form!");
       return false;
    }
    else{
      alert (name + ",thank you for contacting us.");
          }
    } 
