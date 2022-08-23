function showPrice() {
    const price = parseInt(
      document.querySelector(".price_page").getAttribute("val")
    );
    const count = parseInt(
      document.querySelector(".order_page input").value
    );
    let total = price;
    if (count) {
      total = count * price;
    }

    document.querySelector(
      ".totalPrice_page div span:nth-child(1)"
    ).innerText = total.toLocaleString();
  }
  function drawStar() {
    document.querySelectorAll("div.star_page").forEach((ele) => {
      const count = ele.getAttribute("val");
      for (let i = 0; i < parseInt(count); i++) {
        ele.innerHTML += "<img src=\"/static/image/star1.jpg\">";
      }
      for (let i = 0; i < 5 - parseInt(count); i++) {
        ele.innerHTML += "<img src=\"/static/image/star2.jpg\">";
      }
    });
  }
  drawStar();
  document.querySelector("#size").addEventListener("change", (event) => {
    const target = document.querySelector(".price_page");
    target.setAttribute("val",event.target.value);
    target.innerText= parseInt(event.target.value).toLocaleString()+"원";
    showPrice();
  });
  $(".order_page input").on(
    "propertychange change keyup paste input",
    function (event) {
      let newValue = $(this).val();
      console.log(newValue);
      if (parseInt(newValue) > 100) {
        event.target.value = "100";
        alert("최대구매가능 수량은 100개입니다");
      }
      showPrice();
    }
  );
