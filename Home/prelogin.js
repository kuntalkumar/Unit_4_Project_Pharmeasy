kk()

function kk(){
  document.querySelector("h4").textContent= "Enter your address";

}





document.getElementById("deliver").addEventListener("click",fun);

 var addresses="";


//  console.log(addresses)
function fun(){
  addresses= prompt("Please Enter your address");
  localStorage.setItem("location",JSON.stringify(addresses));
    // document.getElementById("EnterAddress").textContent= addresses; 


     }
    

// document.getElementById("EnterAddress").textContent= addresses; 
// document.querySelector("h4").textContent= "";


var kk=JSON.parse(localStorage.getItem("location"));
console.log(kk); 
// document.getElementById("EnterAddress").textContent= kk;
document.getElementById("cart").addEventListener("click",mycart);

function mycart(){
  alert("Login first ")
}



document.getElementById("login").addEventListener("click", findUser);

     function findUser(){

      localStorage.setItem("userName",JSON.stringify("userName"));

     }
