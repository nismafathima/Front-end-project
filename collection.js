var productcontainer =document.getElementById("products")
var search =document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){

    var enteredValue=event.target.value
    for(i= 0;i<productlist.length;i=i+1)
        {   

          var productname = productlist[i].querySelector("p").textcontent

       if(productlist[i].querySelector("p").textContent.indexOf(enteredValue)<0)
       {

    
           productlist[i].style.display="none"
        }
else{
    productlist[i].style.display="block"
}

    }

})