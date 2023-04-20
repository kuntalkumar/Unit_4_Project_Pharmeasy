
// var medicine=document.getElementById("medicine").value;
// var labTest=document.getElementById("labTest").value;
// var healthcare=document.getElementById("healthcare").value;
// var healthBlog=document.getElementById("healthBlog").value;
// var plus=document.getElementById("plus").value;
// var offer=document.getElementById("offer").value;
// var valueStore=document.getElementById("valueStore").value;
// var arr=[]
// var obj={
    
//     medicine:medicine,
//     labTest:labTest,
//     healthcare:healthcare,
//     healthBlog:healthBlog,
//     plus:plus,
//     offer:offer,
//     valueStore:valueStore

// }
// arr.push(obj);
// console.log(arr);


document.getElementById("deliver").addEventListener("click",fun);

//  var addresses=
//  console.log(addresses)
function fun(){
 var addresses= prompt("Please Enter your address");
  localStorage.setItem("location",JSON.stringify(addresses));
  document.getElementById("EnterAddress").textContent= addresses;  

}
document.getElementById("EnterAddress").textContent= JSON.parse(localStorage.getItem("location"));  


