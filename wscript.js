let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendResult(result) {
  let { title, link, description } = result;
  // create result Element-div
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
  searchResultsEl.appendChild(resultItemEl);
  // create title Element-a
  let resultTitle = document.createElement("a");
  resultTitle.classList.add("result-title");
  resultTitle.textContent = title;
  resultTitle.href = link;
  resultTitle.target = "_blank";
  searchResultsEl.appendChild(resultTitle);
  // create tile break
  let titleBreak = document.createElement("br");
  searchResultsEl.appendChild(titleBreak);
  // create url-a
  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.textContent = link;
  urlEl.href = link;
  urlEl.target = "_blank";
  searchResultsEl.appendChild(urlEl);
  //create url break
  let urlBreak = document.createElement("br");
  searchResultsEl.appendChild(urlBreak);
  // create discription-p
  let resultDescriptionEl = document.createElement("a");
  resultDescriptionEl.classList.add("line-description");
  resultDescriptionEl.textContent = description;
  searchResultsEl.appendChild(resultDescriptionEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.toggle("d-none");
  for (let result of searchResults) {
    createAndAppendResult(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.toggle("d-none");
    searchResultsEl.textContent = "";
    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
