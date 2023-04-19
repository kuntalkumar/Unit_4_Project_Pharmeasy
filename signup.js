document.querySelector("i").addEventListener("click",Shiva) ;
function Shiva(){
    var z = document.getElementById("pass1").type ;
    var z = document.getElementById("pass2").type ;
    if ( z === "password"){
        document.getElementById("pass1").type = "text" ;
        document.getElementById("pass2").type = "text" ;
        document.querySelector("i").classList = "bx bx-show eye-icon" ;
    }
    else{
        document.getElementById("pass1").type = "password" ;
        document.getElementById("pass2").type = "password" ;
        document.querySelector("i").classList = "bx bx-hide eye-icon" ;
    }
}

document.querySelector("form").addEventListener("submit",Shiva2) ;
var arr = JSON.parse(localStorage.getItem("customers")) || [] ;
function Shiva2(){
    event.preventDefault() ;
    var obj = {
         email : document.getElementById("email").value ,
         pass1 : document.getElementById("pass1").value ,
         pass2 : document.getElementById("pass2").value ,
    }

    var count = 0 ;
    fil = arr.filter(function(ele,i){
        if( obj.email.length > 0 && obj.email === ele.email && obj.pass1 === obj.pass2){
            count++ ;
            alert("Exiting Email") ;
        }
    })


    if ( count == 0 ){
        if (obj.name != "" && obj.pass1 != "" && obj.pass1 === obj.pass2 ){
            arr.push(obj) ;
            localStorage.setItem("customers",JSON.stringify(arr)) ;
            alert("Account Succesful Created") ;
        }
        else if ( obj.email == "" && obj.pass1 == "" && obj.pass2 == ""){
            alert("Create Account") ;
        }
        else if ( obj.pass1 == "" && obj.pass2 == ""){
            alert("Create Password") ;
        }
        else{
            alert("Password Not Match") ;
        }
    }
}
