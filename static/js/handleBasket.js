function handleBasketCount() {
    const basketCount = document.querySelector(".basketCount");
    const local = JSON.parse(window.localStorage.getItem("basket"));
    if (!local) {
      basketCount.innerText = "0";
    } else if (local.length == 0) {
      basketCount.innerText = "0";
    } else {
      basketCount.innerText = local.length;
    }
  }

handleBasketCount();