var product=JSON.parse(localStorage.getItem("adminData"));
console.log(product);
 display(product);

 function display(product)
{
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
        nameoftheproduct.textContent=ele.nameoftheproduct
        var price=document.createElement("h4")
        price.setAttribute("class",'price');
        price.textContent=ele.price;
        console.log(price);

        var butt=document.createElement("button")
        butt.setAttribute("class","buttton")
        butt.textContent="Add to cart";
        divc.append(image,nameoftheproduct,price,butt);
        document.querySelector("#container").append(divc);



});
}