

document.getElementById("deliver").addEventListener("click",fun);

 var addresses="";
//  console.log(addresses)
function fun(){
  addresses= prompt("Please Enter your address");
  localStorage.setItem("location",JSON.stringify(addresses));
    // document.querySelector("h4").textContent= "";
    document.getElementById("EnterAddress").textContent= addresses; 

    // document.getElementById("express").textContent= "Deliver to ";

}
document.getElementById("EnterAddress").textContent= addresses; 
// document.querySelector("h4").textContent= "";

// document.querySelector("h4").textContent= "";



var kk="";
kk=JSON.parse(localStorage.getItem("location"));
// console.log(kk); 
document.getElementById("EnterAddress").textContent= kk;
  // document.getElementById("cart").addEventListener("click",mycart);

// document.getElementById("login").addEventListener("click", findUser);

// function findUser(){

//  var userName="kuntal"
var adBM=JSON.parse(localStorage.getItem("userName"));

// } 
 user();

function user(){

document.getElementById("login").innerText=adBM; 
// console.log(adBM);

}




document.getElementById("button").addEventListener("click",searchP);
function searchP(input){
  var input=document.getElementById("inputP").value;

  console.log(input);
  localStorage.setItem("serachProduct",input);
  if(input==="dettol"){
    window.location.href = "dettol.html"


  }
  else
  {
    alert("Plese enter item name");

  }
}
