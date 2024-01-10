let currentQuery = "sports";
let currentPage = 1;

const fetchNews = async (page, q) => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2024-01-09&" +
    "language=en&" +
    "pageSize=12&" +
    "page=" +
    page +
    "&sortBy=popularity&" +
    "apiKey=a1fb67c4f1904fc2b611c664083ebfc1";

  var req = new Request(url);

  // let a = await fetch(req);
  // let response = await a.json();
  // console.log(JSON.stringify(response));

  let response = {
    status: "ok",
    totalResults: 230,
    articles: [
      {
        source: { id: "espn", name: "ESPN" },
        author: "ESPN staff",
        title: "Sports world reacts to Michigan's win",
        description:
          "Former Wolverines Nico Collins and Jourdan Lewis were among members of the sports world to congratulate Michigan.",
        url: "https://www.espn.com/college-football/story/_/id/39269096/college-football-national-championship-game-2023-social-reactions",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0109%2Fr1275182_1296x729_16%2D9.jpg",
        publishedAt: "2024-01-09T06:01:14Z",
        content:
          "The No. 1 Michigan Wolverines are national champions, defeating the No. 2 Washington Huskies 34-13 in the College Football Playoff National Championship game.\r\nEditor's Picks\r\nThe Wolverines went up … [+2400 chars]",
      },
      {
        source: { id: null, name: "AppleInsider" },
        author: "news@appleinsider.com (Wesley Hilliard)",
        title:
          "UK-first streaming service EE TV launches on Apple TV 4K with branded remote",
        description:
          "EE TV is a streaming service now available on Apple TV 4K with a full TV guide and custom physical remote.EE TVEE TV launched in December 2023 to offer UK users a new and flexible way to stream on-demand and live content. The app offers a wide selection of co…",
        url: "https://appleinsider.com/articles/24/01/09/uk-first-streaming-service-ee-tv-launches-on-apple-tv-4k-with-branded-remote",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/58018-118182-IMG_4604-xl.jpg",
        publishedAt: "2024-01-09T01:58:27Z",
        content:
          "EE TV\r\nEE TV is a streaming service now available on Apple TV 4K with a full TV guide and custom physical remote.\r\nEE TV launched in December 2023 to offer UK users a new and flexible way to stream o… [+1076 chars]",
      },
      {
        source: { id: null, name: "Yanko Design" },
        author: "JC Torres",
        title:
          "ROG Phone 8 at CES 2024 arrives with a simpler, more premium design",
        description:
          "ROG Phone 8 at CES 2024 arrives with a simpler, more premium designWhat is a gaming phone? Since most smartphones can actually handle mobile games, especially the more expensive models, this breed of smartphones differentiates itself from...",
        url: "https://www.yankodesign.com/2024/01/08/rog-phone-8-at-ces-2024-arrives-with-a-simpler-more-premium-design/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2024/01/rog-phone-8-at-ces-2024-arrives-with-a-simpler-more-premium-design/asus-rog-phone-8-2.jpg",
        publishedAt: "2024-01-09T00:02:09Z",
        content:
          "What is a gaming phone? Since most smartphones can actually handle mobile games, especially the more expensive models, this breed of smartphones differentiates itself from the rest of the crowd with … [+3283 chars]",
      },
      {
        source: { id: null, name: "BGR" },
        author: "Andy Meek",
        title:
          "Apple TV+ faces a make-or-break 2024, Hollywood insider predicts",
        description:
          "Apple TV+ is about to drop a slew of new prestige TV series on us, including one that cost almost $300 million. That’s a lot …\nThe post Apple TV+ faces a make-or-break 2024, Hollywood insider predicts appeared first on BGR.",
        url: "https://bgr.com/entertainment/apple-tv-faces-a-make-or-break-2024-hollywood-insider-predicts/",
        urlToImage:
          "https://bgr.com/wp-content/uploads/2024/01/rsz_the_new_look_photo_010701.jpg?quality=82&strip=all",
        publishedAt: "2024-01-09T02:21:00Z",
        content:
          "Apple TV+ is about to drop a slew of new prestige TV series on us, including one that cost almost $300 million. That’s a lot of money for a streamer that relatively few people are watching, no?\r\nAppl… [+3206 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "Doric Sam",
        title:
          "Pacers' Tyrese Haliburton Carried Off Floor With Hamstring Injury",
        description:
          "The Indiana Pacers potentially suffered a devastating loss early in Monday's game against the Boston Celtics. Per Sports Illustrated's Chris Mannix, star…",
        url: "https://bleacherreport.com/articles/10104188-pacers-tyrese-haliburton-carried-off-floor-with-hamstring-injury",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704762373/qdhtb9htskbjolezlbhe.jpg",
        publishedAt: "2024-01-09T01:11:25Z",
        content:
          "Dylan Buell/Getty Images\r\nThe Indiana Pacers potentially suffered a devastating loss early in Monday's game against the Boston Celtics.\r\nPer Sports Illustrated's Chris Mannix, star point guard Tyrese… [+1743 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "David Kenyon",
        title:
          "Michigan's Sizzling Backfield Propels Jim Harbaugh, Wolverines to CFP National Title",
        description:
          "HOUSTON — It's now how you start, the classic sports trope says, it's how you finish. Turns out, the answer is both. Behind a powerful running game, Jim…",
        url: "https://bleacherreport.com/articles/10104195-michigans-sizzling-backfield-propels-jim-harbaugh-wolverines-to-cfp-national-title",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704766830/armk1kbixdydqrhlkjsj.jpg",
        publishedAt: "2024-01-09T04:53:37Z",
        content:
          "Donovan EdwardsMaddie Meyer/Getty Images\r\nHOUSTON It's now how you start, the classic sports trope says, it's how you finish.\r\nTurns out, the answer is both.\r\nBehind a powerful running game, Jim Harb… [+4340 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "Lyle Fitzsimmons",
        title: "Winners and Losers of the Cutter Gauthier-Jamie Drysdale Trade",
        description:
          "It's been a fun early season in Philadelphia. Though often buried on the city's sports pages behind the NFL's Eagles by this time each year, the 2023-24…",
        url: "https://bleacherreport.com/articles/10104183-winners-and-losers-of-the-cutter-gauthier-jamie-drysdale-trade",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704760797/puzr9swbejk5izcb1n8h.jpg",
        publishedAt: "2024-01-09T03:00:25Z",
        content:
          "Dave Sandford/NHLI via Getty Images\r\nIt's been a fun early season in Philadelphia.\r\nThough often buried on the city's sports pages behind the NFL's Eagles by this time each year, the 2023-24 Flyers a… [+1233 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "Andrew Peters",
        title:
          "Michigan's Blake Corum, Will Johnson Named 2024 CFB National Championship MVPs",
        description:
          "Michigan's Blake Corum and Will Johnson are the 2024 College Football National Championship MVP. Corum, a running back, has had an outstanding season, and he…",
        url: "https://bleacherreport.com/articles/10104203-michigans-blake-corum-will-johnson-named-2024-cfb-national-championship-mvps",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704774020/a9eme9zwrcq3d6evqysd.jpg",
        publishedAt: "2024-01-09T04:39:48Z",
        content:
          "Stacy Revere/Getty Images\r\nMichigan's Blake Corum and Will Johnson are the 2024 College Football National Championship MVP.\r\nCorum, a running back, has had an outstanding season, and he capped off hi… [+1972 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "zach bachar",
        title:
          "Alabama DC Kevin Steele Reportedly Plans to Retire From Coaching",
        description:
          "Alabama defensive coordinator Kevin Steele is reportedly planning on retiring from coaching following the team's defeat in the Rose Bowl, according to ESPN's…",
        url: "https://bleacherreport.com/articles/10104185-alabama-dc-kevin-steele-reportedly-plans-to-retire-from-coaching",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704760903/ydxtsnyipszkbipbbapb.jpg",
        publishedAt: "2024-01-09T00:47:47Z",
        content:
          "Steve Limentani/ISI Photos/Getty Images\r\nAlabama defensive coordinator Kevin Steele is reportedly planning on retiring from coaching following the team's defeat in the Rose Bowl, according to ESPN's … [+590 chars]",
      },
      {
        source: { id: "bleacher-report", name: "Bleacher Report" },
        author: "zach bachar",
        title:
          "Jaguars DC Mike Caldwell Reportedly Fired After Jacksonville Misses 2024 NFL Playoffs",
        description:
          "The Jacksonville Jaguars have reportedly fired defensive coordinator Mike Caldwell, according to Bleacher Report's Jordan Schultz. Caldwell was initially…",
        url: "https://bleacherreport.com/articles/10104177-jaguars-dc-mike-caldwell-reportedly-fired-after-jacksonville-misses-2024-nfl-playoffs",
        urlToImage:
          "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704758384/ddafh4x8v3c6g1ghke2n.jpg",
        publishedAt: "2024-01-09T00:05:32Z",
        content:
          "David Rosenblum/Icon Sportswire via Getty Images\r\nThe Jacksonville Jaguars have reportedly fired defensive coordinator Mike Caldwell, according to Bleacher Report's Jordan Schultz.\r\nJordan Schultz@Sc… [+1104 chars]",
      },
      {
        source: { id: null, name: "Rolling Stone" },
        author: "Charisma Madarang",
        title: "Jimmy Kimmel Scorches Aaron Rodgers in Seven-Minute Roast",
        description:
          "Jimmy Kimmel delivered a scathing monologue following Aaron Rodgers' baseless suggestion that the comedian was linked to Jeffrey Epstein.",
        url: "http://www.rollingstone.com/tv-movies/tv-movie-news/jimmy-kimmel-aaron-rodgers-monologue-roast-1234942837/",
        urlToImage:
          "https://www.rollingstone.com/wp-content/uploads/2024/01/Jimmy-Kimmel-Aaron-Rodgers-Roast.jpg?w=1600&h=900&crop=1",
        publishedAt: "2024-01-09T06:14:39Z",
        content:
          "Jimmy Kimmel returned to Jimmy Kimmel Live! for his first show of the year and delivered a scathing monologue following Aaron Rodgers’ baseless suggestion that the comedian was linked to Jeffrey Epst… [+3265 chars]",
      },
      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Jelani Scott",
        title:
          "Michael Jordan, Derek Jeter and Travis Scott Filled Out a Star-Studded Suite at the CFP National Championship",
        description: "Stephen A. Smith was there too.",
        url: "https://www.si.com/college/2024/01/09/michael-jordan-derek-jeter-travis-scott-suite-at-cfp-national-championship",
        urlToImage:
          "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAzNDk3MzI4NjAwOTUwMTA4/suite.jpg",
        publishedAt: "2024-01-09T03:40:00Z",
        content:
          "The NRG Stadium roof may have been closed, but the stars were out in full effect on Monday for the highly-anticipated 2023 College Football Playoff national championship game.\r\nAn epic final between … [+727 chars]",
      },
    ],
  };

  console.log(response);

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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

fetchNews(currentPage, currentQuery); // Inital Call to fetchNews

document.querySelector(".navbar-home-link").addEventListener("click", (e) => {
  e.preventDefault();
  updateQueryAndFetch("general");
  scrollToTop();
});
document.querySelector(".navbar-sports-link").addEventListener("click", (e) => {
  e.preventDefault();
  location.reload(true);
  scrollToTop();
  updateQueryAndFetch("sports");
});
document
  .querySelector(".navbar-weather-link")
  .addEventListener("click", (e) => {
    e.preventDefault();
    updateQueryAndFetch("weather");
    scrollToTop();
  });
document
  .querySelector(".navbar-politics-link")
  .addEventListener("click", (e) => {
    e.preventDefault();
    updateQueryAndFetch("politics");
    scrollToTop();
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
    scrollToTop();
  }
});
next.addEventListener("click", async (e) => {
  e.preventDefault();
  const totalResults = await fetchTotalResults(currentQuery);
  const totalPages = Math.ceil(totalResults / 12);
  if (currentPage < totalPages) {
    currentPage = currentPage + 1;
    fetchNews(currentPage, currentQuery);
    scrollToTop();
  }
});

async function fetchTotalResults(query) {
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-01-06&language=en&apiKey=a1fb67c4f1904fc2b611c664083ebfc1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.totalResults;
}
