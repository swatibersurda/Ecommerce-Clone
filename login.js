document.querySelector("#form").addEventListener("submit",checkUser)
    var registerUser=JSON.parse(localStorage.getItem("signupData"))
    console.log(registerUser);
    var found=false;
    function checkUser(event)
    {
        event.preventDefault();
    var name=document.querySelector("#name").value
    var password=document.querySelector("#password").value
    // console.log(name,password);

    if(name=="admin" && password=="admin")
    {
        alert("LOGIN SUSSESFULLY");
        window.location.href="admin.html"
    }
    else
    {
       registerUser.map(function(ele)
          {
              
        for(var i=0;i<registerUser.length;i++)
        {
            
            if(ele.name==name && ele.password==password)
            {
               found=true;
            }
        }
    });

        if(found)
        {
            alert("LOGIN SUSSESFULLY");
            window.location.href="product.html"
            
        }
        else 
        {
            alert("INVALID USER SIGNUP FIRST");
            window.location.href="signup.html"
            
            
        
        }
   
    }
    }