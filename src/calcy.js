function divide() {
  var height = Number(document.getElementById("height").value);
  var weight = Number(document.getElementById("weight").value);
  let response = document.getElementById("result");
  let formular = weight / (height * height);
  console.log(formular);
  if(formular < 18.5){
      response.innerHTML= "You are Underweight";
      document.getElementById("message").innerHTML =formular  ;

  }

  else if(18.5 >= formular || 24.9 >=formular  ){
      response.innerHTML= "You are Healthy";
      document.getElementById("message").innerHTML =formular  ;
  }

  else if (25.0 >= formular || 29.9 >= formular){
      response.innerHTML= " You are Overweight";
      document.getElementById("message").innerHTML =formular  ;


  }

  else{
      response.innerHTML= "You are Obese";
      document.getElementById("message").innerHTML =formular  ;

  }

}

document.getElementById("go").addEventListener("click", divide);
