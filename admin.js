document.querySelector("#form").addEventListener("submit",adminValue)
    // var admnvaluearr=[];
    var admnvaluearr=JSON.parse(localStorage.getItem("adminData"))||[]
    function adminValue(event)
    {
        event.preventDefault();
        var nameofproduct=document.querySelector("#nameofproduct").value
        var description=document.querySelector("#description").value
        var cat=document.querySelector("#cat").value
        // console.log(nameofproduct,description,cat);
        var adminvalueobj={
                       nameofproduct:nameofproduct,
                       description:description,
                       cat:cat,

                     };

                    //  console.log(adminvalueobj);
                     admnvaluearr.push(adminvalueobj);
                  console.log(admnvaluearr);
                    localStorage.setItem("adminData",JSON.stringify(admnvaluearr));
    }