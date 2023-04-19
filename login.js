document.querySelector("i").addEventListener("click",Shiva) ;
function Shiva(){
    var z = document.getElementById("pass").type ;
    if ( z === "password"){
        document.getElementById("pass").type = "text" ;
        document.querySelector("i").classList = "bx bx-show eye-icon" ;
    }
    else{
        document.getElementById("pass").type = "password" ;
        document.querySelector("i").classList = "bx bx-hide eye-icon" ;
    }
}

document.querySelector("form").addEventListener("submit",Shiva2) ;
var arr = JSON.parse(localStorage.getItem("customers")) || [] ;
function Shiva2(customers){
    event.preventDefault() ;
    var obj = {
         email : document.getElementById("email").value ,
         pass : document.getElementById("pass").value ,
    }
    var count = 0 ;
    if (obj.email === "" || obj.pass === "" || obj.email === "" && obj.pass === "" ){
        alert("Enter Valid Data") ;
    }
    else{
        arr.map(function(ele,i){
            if( obj.email === ele.email && obj.pass === ele.pass1 ){
                alert("Account Created") ;
                Shiva3() ;
                count++ ;
                return ;
            }
        })
    }
    if ( count == 0 ){
        alert("Please !Sign-up") ;
    }
}
function Shiva3(){
    document.querySelector("body").style.background = "green" ;
}
