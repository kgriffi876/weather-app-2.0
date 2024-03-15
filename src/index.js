function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-city");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", search);
