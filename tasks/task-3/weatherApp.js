const apikey = "9712a3fae8c09f410e31b8b11f79fd16";
const cityele = document.getElementById("city-input");
const btn = document.getElementById("searchbtn");
const errorEle = document.getElementById("error");
const hr = document.querySelector(".weather-info hr");
const vhr = document.querySelector(".vertical-hr");

const cityName = document.getElementById("cityName");
const temperatureEle = document.getElementById("temperature");
const weatherEle = document.getElementById("description");
const humidityEle = document.getElementById("humidity");


btn.addEventListener("click", async () => {
  const city = cityele.value;
  let data;
  if (!city) {
    errorEle.style.display = "block";
    errorEle.textContent = "Please enter a city name.";
    setTimeout(() => {
        errorEle.textContent = "";
        errorEle.style.display = "none";
    }, 3000);
    return;
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(url);
    data = await response.json();
    
    
    if (data.cod == "404") {
        errorEle.style.display = "block";
        errorEle.textContent = "City not found. Please enter a valid city name.";
        setTimeout(() => {
            errorEle.textContent = "";
            errorEle.style.display = "none";
        }, 3000);
        return;
    }
    //display the hr and vhr only when the data is successfully fetched
    hr.style.display = "block";
    vhr.style.display = "block";
    
    
  } catch (error) {
    errorEle.textContent = error.message;
    cityName.textContent = "";
    temperatureEle.textContent = "";
    weatherEle.textContent = "";
    humidityEle.textContent = "";
    return;
  }
  //   console.log(data);
  const temp = data.main.temp;
  const weather = data.weather[0].main;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  cityName.textContent = data.name;
  temperatureEle.textContent = `${temp}°C`;
  weatherEle.textContent = `Weather: ${weather}`;
  humidityEle.textContent = `Humidity: ${humidity}%`;

  cityele.value = "";
});
