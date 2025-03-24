function showMessage() {
    alert("Welcome to Javascript!");

    var name = prompt("What is your name?","");
    var likesJS = confirm("Do you like Javascript?");

    var message = "Hello, " + name + "! ";
    message += likesJS ? "Glad you like Javascript!" : "Hope you learn to enjoy it!";

    document.getElementById("output").innerHTML = message;
}

function Student(){
    var name = "Alvin";
    var sex = "Male"
    var age = 28;

    return age;
}


  var myArray = new Array(5);

  myArray[0] = 'Dale';
  myArray[1] = 1;
  myArray[2] = 1.88976456;
  myArray[3] = false;
  myArray[4] = null();

  myArray.length = 10;

  var Car3 = ["Ford", "Toyota", "Honda"];
  var Car2 = new Array ["Ford", "Toyota", "Honda"];

  var nameTag = document.getElementById('name1');



  
  var arrayLeft = myArray.reverse;

  var email = "";

  function Login(){
    if(email){
        nameTag.textContent = 'Logged';
    }else{
        nameTag.textContent = 'Email is Empty';
    }
  }