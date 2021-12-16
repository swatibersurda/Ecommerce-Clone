document.querySelector("button").addEventListener("click",signupValue)
// var signuparr=[];
var signuparr=JSON.parse(localStorage.getItem("signupData"))||[];
function signupValue()

{
    var name=document.querySelector("#name").value
    
    var password=document.querySelector("#password").value
    
    var email=document.querySelector("#email").value
    
    var mobile=document.querySelector("#mobile").value
    
    
 var signupobj={
             name:name,
             password:password,
             email:email,
             mobile:mobile,
         }
        //  console.log(signupobj);
        
   signuparr.push(signupobj);
//    console.log(signuparr);
localStorage.setItem("signupData",JSON.stringify(signuparr));
alert("congratulations you have signup susesfully time to LOGIN");
window.location.href="login.html"


}