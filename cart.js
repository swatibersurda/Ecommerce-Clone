var cart=JSON.parse(localStorage.getItem("cartvalue"));
    // display(cart);
    console.log(cart);
    display(cart);
    cartTotal(cart);
    
    // console.log(cart[1].price);
    function display(cart)
   {
    document.querySelector("#container").textContent="";
    cart.map(function(ele,index)
    {
        //  var x=ele.nameofproduct;
        // console.log(x);
        
       var divc=document.createElement("div");
       divc.setAttribute("class","divc")

        var image=document.createElement("img")
        image.setAttribute("src",ele.image);
        // console.log(image);


        var nameoftheproduct=document.createElement("p")
        nameoftheproduct.setAttribute("class","nameofproduct")
        // nameoftheproduct.textContent=ele.nameofproduct+" "+ele.cat;
        nameoftheproduct.textContent=ele.nameofproduct;
    //    console.log(nameoftheproduct);

       var cat=document.createElement("p")
       cat.textContent=ele.cat;
       cat.setAttribute("class","cat");


        var price=document.createElement("h4")
        price.setAttribute("class",'price');
        price.textContent=ele.price;
        console.log(price);

        divc.append(image,nameoftheproduct,cat,price);
        document.querySelector("#container").append(divc);
        
});
}
 

function cartTotal(cartvalue)
 {
    //  var res=0;
    var res=cart.reduce(function(ac,cv)
    {
    
        return ac+Number(cv.price);
    },0);


    var carttotalvalue=document.createElement("p");
     carttotalvalue.textContent=res;
     document.querySelector("#total").append(carttotalvalue);

 }

 //using for loop

// for(var i=0;i<cart.length;i++)
// {
//     var res=res+Number(cart[i].price);
// }
// console.log(res);
//}
