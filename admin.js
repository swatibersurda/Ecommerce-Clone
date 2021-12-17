document.querySelector("#form").addEventListener("submit",adminValue)
      // var admnvaluearr=[];
      var admnvaluearr=JSON.parse(localStorage.getItem("adminData"))||[]
    function adminValue(event)
    {
        event.preventDefault();
        var image=document.querySelector("#image").value
        var nameofproduct=document.querySelector("#nameofproduct").value
        var price=document.querySelector("#price").value
        var cat=document.querySelector("#cat").value
        // console.log(nameofproduct,description,cat);
        var adminvalueobj={
                       image:image,
                       nameofproduct:nameofproduct,
                       price:price,
                       cat:cat,

                     };

                    //  console.log(adminvalueobj);
                     admnvaluearr.push(adminvalueobj);
                  console.log(admnvaluearr);
                    localStorage.setItem("adminData",JSON.stringify(admnvaluearr));
    }