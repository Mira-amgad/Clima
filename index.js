function updateWeather(response) {
  let temp = document.querySelector("#value");
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  temp.innerHTML = Math.round(response.data.main.temp);
}

function Search(city) {
  let apiKey = "1c47cb7de8db7253e5f709b37d433711";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function submit(event) {
  event.preventDefault();
  let input = document.querySelector("#form-input");

  Search(input.value);
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submit);
Search("Cairo");
