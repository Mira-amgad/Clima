function submit(event) {
  event.preventDefault();
  let input = document.querySelector("#form-input");
  let city = document.querySelector("#city");
  city.innerHTML = input.value;
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submit);
