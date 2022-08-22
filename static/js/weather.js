const wrapper = document.querySelector(".wrapper"),
  option = document.querySelector(".form-select"),
  inputPart = wrapper.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  wIcon = wrapper.querySelector(".weather-part img"),
  arrowBack = wrapper.querySelector("header i");

let api;

const apiKey = "0b60aa6f27f0d4f5de59209662c52b62";

// 선택된 도시 날씨 api요청
option.addEventListener("change", (e) => {
  requestApi(option.value);
});

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city},{country code}&units=metric&appid=${apiKey}`;
  fetchData();
}

// 현재위치 날씨 가져오기
locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    fetchData();
  } else {
    alert("Your browser noe support geolocation api");
  }
});

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}
  `;
  fetchData();
}

function onError(error) {
  console.log(error);
  infoTxt.innerText = error.message;
  infoTxt.classList.add("error");
}

function fetchData() {
  infoTxt.innerText = "날씨 정보 가져오는 중..";
  infoTxt.classList.add("pending");
  fetch(api).then((response) =>
    response.json().then((result) => weatherDetails(result))
  );
}

function weatherDetails(info) {
  if (info.cod == "404") {
    infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    infoTxt.classList.replace("pending", "error");
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { id } = info.weather[0];
    const { feels_like, humidity, temp } = info.main;

    if (id == 800) {
      wIcon.src = "/static/image/clear.svg";
    } else if (id >= 200 && id <= 232) {
      wIcon.src = "/static/image/storm.svg";
    } else if (id >= 600 && id <= 622) {
      wIcon.src = "/static/image/snow.svg";
    } else if (id >= 701 && id <= 781) {
      wIcon.src = "/static/image/haze.svg";
    } else if (id >= 801 && id <= 804) {
      wIcon.src = "/static/image/cloud.svg";
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
      wIcon.src = "/static/image/rain.svg";
    }

    wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
    // wrapper.querySelector(".weather").innerText = description;
    wrapper.querySelector(".location span").innerText = `${city}, ${country}`;
    wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
    wrapper.querySelector(".humidity span").innerText = `${humidity}%`;

    infoTxt.classList.remove("pending", "error");
    wrapper.classList.add("active");
    console.log(info);
  }
}

arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
