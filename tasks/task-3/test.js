const apiKey = "9712a3fae8c09f410e31b8b11f79fd16";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));