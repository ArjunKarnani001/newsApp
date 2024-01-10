let currentQuery = "sports";
let currentPage = 1;

const fetchNews = async (page, q) => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2024-01-06&" +
    "language=en&" +
    "pageSize=12&" +
    "page=" +
    page +
    "&sortBy=popularity&" +
    "apiKey=a1fb67c4f1904fc2b611c664083ebfc1";

  var req = new Request(url);

  let a = await fetch(req);
  let response = await a.json();

  let str = "";
  resultCount.innerHTML = response.totalResults;
  pageNumber.innerHTML = currentPage;

  for (let item of response.articles) {
    str =
      str +
      `<div class="cards">
          <img src="${item.urlToImage}" class="cardImage"...">
            <h5 class="cardTextTitle">${item.title.slice(0, 55)}...</h5>
            <p class="cardDescription">${item.description.slice(0, 60)}...</p>
            <a href="${
              item.url
            }" target="_blank" class="cardButton">Read More</a>
            </div>`;
  }

  document.querySelector(".content").innerHTML = str;
};

const updateQueryAndFetch = (query) => {
  currentQuery = query;
  currentPage = 1;
  fetchNews(currentPage, query);
};

// const updateHeader = () => {
//   document.querySelector(".header").innerHTML =
//     "Welcome to your News App (" +
//     currentPage +
//     ' / <span id="resultCount"></span> Results)';
// };

fetchNews(currentPage, currentQuery); // Inital Call to fetchNews

document.querySelector(".navbar-home-link").addEventListener("click", (e) => {
  e.preventDefault();
  updateQueryAndFetch("general");
});
document.querySelector(".navbar-sports-link").addEventListener("click", (e) => {
  e.preventDefault();
  updateQueryAndFetch("sports");
});
document
  .querySelector(".navbar-weather-link")
  .addEventListener("click", (e) => {
    e.preventDefault();
    updateQueryAndFetch("weather");
  });
document
  .querySelector(".navbar-politics-link")
  .addEventListener("click", (e) => {
    e.preventDefault();
    updateQueryAndFetch("politics");
  });

search.addEventListener("click", (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = query;
  currentPage = 1;
  fetchNews(currentPage, query);
});
previous.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    fetchNews(currentPage, currentQuery);
  }
});
next.addEventListener("click", async (e) => {
  e.preventDefault();
  const totalResults = await fetchTotalResults(currentQuery);
  const totalPages = Math.ceil(totalResults / 12);
  if (currentPage < totalPages) {
    currentPage = currentPage + 1;
    fetchNews(currentPage, currentQuery);
  }
});

async function fetchTotalResults(query) {
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-01-06&language=en&apiKey=a1fb67c4f1904fc2b611c664083ebfc1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.totalResults;
}
