function handleLink(){
  const path = window.location.pathname;
      const page = path.split("/").pop();
      const target = document.querySelectorAll(
        ".col-12.col-sm-6.col-md-4.col-lg-3 p"
      );
      target.forEach((ele) => {
        ele.addEventListener("click", (event) => {
          const name = event.target.parentNode.getAttribute("val");
          location.href = `/shop/${page}/${name}`;
        });
      });
      const secondTarget = document.querySelectorAll(
        ".col-12.col-sm-6.col-md-4.col-lg-3 img"
      );
      secondTarget.forEach((ele) => {
        ele.addEventListener("click", (event) => {
          const name = event.target.parentNode.getAttribute("val");
          location.href = `/shop/${page}/${name}`;
        });
      });
}


function drawStar() {
    document.querySelectorAll("p.rating").forEach((ele) => {
      const count = ele.getAttribute("val");
      console.log(count);
      for (let i = 0; i < parseInt(count); i++) {
        ele.innerHTML += "⭐";
      }
      for (let i = 0; i < 5 - parseInt(count); i++) {
        ele.innerHTML += "✩";
      }
    });
  }
  handleLink();
  drawStar();
  const arr = [];
  const items = document.querySelectorAll(
    "div.col-12.col-lg-3.col-md-4.col-sm-6"
  );
  items.forEach((ele) => {
    const price = ele.querySelector("p.price").getAttribute("val");
    const rating = ele.querySelector("p.rating").getAttribute("val");
    const url = ele.querySelector("img").getAttribute("src");
    const title = ele.querySelector("p.title").innerText;
    const prettyPrice = ele.querySelector("p.price").innerText;
    const link = ele.getAttribute('val');
    arr.push({
      price: price,
      rating: rating,
      url: url,
      title: title,
      prettyPrice,
      link
    });
    console.log(arr);
  });
  document.querySelector("#sort").addEventListener("change", (event) => {
    let newArr = [];
    if (event.target.value == "higherRating") {
      newArr = arr.sort((a, b) => {
        return parseInt(b.rating) - parseInt(a.rating);
      });
    } else if (event.target.value == "higherPrice") {
      newArr = arr.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      newArr = arr.sort((a, b) => {
        return a.price - b.price;
      });
    }
    document
      .querySelectorAll("div.col-12.col-lg-3.col-md-4.col-sm-6")
      .forEach((ele) => {
        ele.remove();
      });
    newArr.forEach((ele) => {
      const row = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList.toggle("col-12");
      col.classList.toggle("col-lg-3");
      col.classList.toggle("col-md-4");
      col.classList.toggle("col-sm-6");
      const img = document.createElement("img");
      img.setAttribute("src", ele.url);
      img.classList.toggle("image_shop");
      const title = document.createElement("p");
      title.classList.toggle("title");
      title.innerText = ele.title;
      const price = document.createElement("p");
      price.classList.toggle("price");
      price.innerText = ele.prettyPrice;
      const rating = document.createElement("p");
      rating.classList.toggle("rating");
      rating.setAttribute("val", ele.rating);
      col.appendChild(img);
      col.appendChild(title);
      col.appendChild(price);
      col.appendChild(rating);
      col.setAttribute("val",ele.link);
      row.appendChild(col);
    });
    handleLink();
    drawStar();
  });