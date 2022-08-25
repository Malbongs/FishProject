const title= document.querySelector(".productName_page").innerText;
      const price = document.querySelector("#size").value;
     const id = document.querySelector(".image_page").getAttribute("src"); 
      document.querySelector(".ordernow_page").addEventListener("click",(event)=>{
        const howMany = document.querySelector("input").value;
        window.localStorage.setItem("order",JSON.stringify([{'id':id,'title':title,"price":price,"howMany":howMany,"from":'false'}]));
        window.location='/shop/order';
      });