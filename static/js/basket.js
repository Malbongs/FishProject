document.querySelector(".basket_page").addEventListener("click",(event)=>{
    const id = document.querySelector(".image_page").getAttribute("src");
    const title = document.querySelector(".productName_page").innerText;
    const price = document.querySelector("select").value;
    const howMany = document.querySelector('.order_page input').value; 
    if (!(parseInt(howMany)>0 && parseInt(howMany)<=100)){
      alert("정상적이지 않은 입력값 입니다.");
      return;
    }
    const item = {id,title,price,howMany};
    if (!window.localStorage.getItem("basket")){
      window.localStorage.setItem("basket",JSON.stringify([]));
    }
    const arr = JSON.parse(window.localStorage.getItem('basket'));
    arr.push(item);
    window.localStorage.setItem("basket",JSON .stringify(arr));

    alert("상품이 성공적으로 장바구니에 담겼습니다!");
  });