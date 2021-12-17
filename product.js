var product=JSON.parse(localStorage.getItem("adminData"));
console.log(product);
 display(product);

//  sortingprice
function sortByPrice()
{
    var selected=document.querySelector("#sortbyprice").value
    // console.log(selected)
    if(selected=="HIGHER TO LOWER")
    {
        product.sort(function(a,b)
        {
             return Number(b.price)-Number(a.price)
        });
    }

    if(selected=="LOWER TO HIGHER")
    {
        product.sort(function(a,b)
        {
             return Number(a.price)-Number(b.price)
        });
    }
    display(product);

}

// sort by name
function sortByName()
{
    

   var selected= document.querySelector("#sortbyname").value
   console.log(selected);
       if(selected=="ASC")
       {
           product.sort(function(a,b)
       {    
         if(a.nameofproduct>b.nameofproduct) return 1;
        if(a.nameofproduct<b.nameofproduct) return -1;
        return 0;
       
       });
    }

       if(selected=="DSC")
       {
           product.sort(function(a,b)
       {    
         if(a.nameofproduct>b.nameofproduct) return -1 ;
        if(a.nameofproduct<b.nameofproduct) return 1;
        return 0;
       
       });
    }
    display(product);
}


// filter categories
function sortbycat()
{
    

   var selected= document.querySelector("#sortbycat").value
   console.log(selected);
   console.log(product);
   cat();
// selected=selected.toLowerCase();

var res=product.filter(function(ele)
 { 
     if(ele.cat==selected)
     {
         return true;
     } 


     else
     {
         return false;
     } 
   
});
display(res);
}

function cat()
{
    product.map(function(ele)
    {
        return ele.cat;


    });
}

//  cat();
//  product.filter(function(cat)

// {
//    if(selected=="FOUNDATION")
//    {
//        return ;
//    }
     

// });

// display(product);


// }

// function cat()
//    {
// var x=product.map(function(ele)
// {
//    return ele.cat;
// });
// console.log(x);
//    }


 function display(product)
{
    document.querySelector("#container").textContent="";
    product.map(function(ele)
    {
        //  var x=ele.nameofproduct;
        // console.log(x);
        
       var divc=document.createElement("div");
       divc.setAttribute("class","divc")

        var image=document.createElement("img")
        image.setAttribute("src",ele.image);
        console.log(image);


        var nameoftheproduct=document.createElement("p")
        nameoftheproduct.setAttribute("class","nameofproduct")
        // nameoftheproduct.textContent=ele.nameofproduct+" "+ele.cat;
        nameoftheproduct.textContent=ele.nameofproduct;
       console.log(nameoftheproduct);

       var cat=document.createElement("p")
       cat.textContent=ele.cat;
       cat.setAttribute("class","cat");


        var price=document.createElement("h4")
        price.setAttribute("class",'price');
        price.textContent=ele.price;
        console.log(price);

        var butt=document.createElement("button")
        butt.setAttribute("class","buttton")
        butt.textContent="Add to cart";
        divc.append(image,nameoftheproduct,cat,price,butt);
        document.querySelector("#container").append(divc);



});
}


