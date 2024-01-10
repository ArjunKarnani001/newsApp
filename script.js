let currentQuery = "sports";
let currentPage = 1;

const fetchNews = async (page, q) => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2024-01-07&" +
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
      {
        source: { id: "engadget", name: "Engadget" },
        author: "Will Shanklin",
        title:
          "Samsung’s 2024 TV lineup at CES 2024 includes AI aplenty and a ‘glare-free’ OLED model",
        description:
          "Samsung’s CES 2024 TV rollout is here. The company typically reserves finer product details (including pricing) for later, but it provided Engadget with a quick rundown of its new television lineup ahead of its press conference on Monday. Its new 8K TVs have …",
        url: "https://www.engadget.com/samsungs-2024-tv-lineup-at-ces-2024-includes-ai-aplenty-and-a-glare-free-oled-model-030046720.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/csQ69tX.YrmA8V9qg5Ea5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/f9fd5dc0-ad7e-11ee-bbda-849c13dd10dd",
        publishedAt: "2024-01-08T03:00:46Z",
        content:
          "Samsungs CES 2024 TV rollout is here. The company typically reserves finer product details (including pricing) for later, but it provided Engadget with a quick rundown of its new television lineup ah… [+3061 chars]",
      },
      {
        source: { id: "engadget", name: "Engadget" },
        author: "Sam Rutherford",
        title:
          "MSI is going big with three new 18-inch gaming laptops at CES 2024",
        description:
          "CES often sets the tone for all of a manufacturer’s products that year. And apparently the theme for MSI in 2024 is “big.” It’s kicking things with three new 18-inch gaming laptops at CES 2024, plus one of the best-looking budget systems around.\nAs usual, MSI…",
        url: "https://www.engadget.com/msi-is-going-big-with-three-new-18-inch-gaming-laptops-at-ces-2024-230028061.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/HhtKXh0wic0mSDtdBwQm3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/608759c0-adab-11ee-bf7f-1d36bcf84ef9",
        publishedAt: "2024-01-08T23:00:28Z",
        content:
          "CES often sets the tone for all of a manufacturers products that year. And apparently the theme for MSI in 2024 is big. Its kicking things with three new 18-inch gaming laptops at CES 2024, plus one … [+3824 chars]",
      },
      {
        source: { id: "the-verge", name: "The Verge" },
        author: "Emma Roth",
        title: "AMD’s Ryzen 8000-series chips get an AI upgrade",
        description:
          "AMD is launching a new lineup of 8000-series accelerated processing units, all of which come with integrated Radeon graphics and a neural processing unit for AI.",
        url: "https://www.theverge.com/2024/1/8/24026575/amd-8000-series-chips-ai-upgrade-ces-2024",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/F0GqmeDjvx8wBuIpJPh-vBJCGAE=/0x0:5760x3240/1200x628/filters:focal(2880x1620:2881x1621)/cdn.vox-cdn.com/uploads/chorus_asset/file/25211302/Ryzen_AI_1.jpg",
        publishedAt: "2024-01-08T15:30:00Z",
        content:
          "AMDs Ryzen 8000-series chips get an AI upgrade\r\nAMDs Ryzen 8000-series chips get an AI upgrade\r\n / AMDs new Ryzen 7 8700G comes with a neural processing unit thats built for AI.\r\nByEmma Roth, a news … [+2544 chars]",
      },
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: null,
        title: "Woman says running is 'tainted' by catcalling men",
        description:
          "Thousands of women fear running alone at night because of the risk of being attacked.",
        url: "https://www.bbc.co.uk/news/av/uk-wales-67894770",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/17E78/production/_132221979_p0h3kmn0.jpg",
        publishedAt: "2024-01-07T21:53:08Z",
        content:
          '"My view on running is slightly tainted, only from past experiences."\r\nLucy Lavington, 18, from Abergavenny in Monmouthshire, said she was running alone when a car pulled up alongside her and the dri… [+290 chars]',
      },
      {
        source: { id: null, name: "Android Central" },
        author: "michael.hicks@futurenet.com (Michael L Hicks)",
        title:
          "Garmin Lily 2 hybrid watches provide a gorgeous, scaled-back alternative to Venu 3",
        description:
          "Though the Garmin Lily 2 and Lily 2 Classic don't make that many changes from the original, they at least bring back the petite, waterproof, and long-lasting design that you liked the first time.",
        url: "https://www.androidcentral.com/wearables/garmin-announces-lily-2-classic-at-ces-2024",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/gTrbS2m8YoKG67RGPuPFVM-1200-80.jpg",
        publishedAt: "2024-01-08T12:00:59Z",
        content:
          "<ul><li>The Garmin Lily 2 ($249) and Lily 2 Classic ($279+) were announced at CES 2024, with a 5-day battery life and monocolor touchscreen display.</li><li>They add sleep scores and dance fitness ac… [+4383 chars]",
      },
      {
        source: { id: null, name: "Android Central" },
        author: "techkritiko@gmail.com (Jay Bonggolto)",
        title: "The Samsung Galaxy Tab A9 might be hitting US shelves soon",
        description:
          "Samsung seems ready to release the Galaxy Tab A9 tablets in the U.S., based on a listing that's no longer available.",
        url: "https://www.androidcentral.com/tablets/samsung-galaxy-tab-a9-plus-briefly-shows-up-in-us",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/FpXghxgVAHxZLmkNMamaf9-1200-80.jpg",
        publishedAt: "2024-01-07T17:44:21Z",
        content:
          "<ul><li>Samsung initially introduced the Galaxy Tab A9 series in October, with a potential upcoming release in the US market.</li><li>Recent sightings on Samsung's website, particularly on the Shop S… [+1890 chars]",
      },
      {
        source: { id: null, name: "Android Central" },
        author: "michael.hicks@futurenet.com (Michael L Hicks)",
        title:
          "Garmin revamping its Connect app is my favorite news of CES 2024",
        description:
          "The Garmin Connect app, as it stands today, is an inscrutible labyrinth to navigate. The redesigned Home page puts all of your most important data upfront, so it's easier to find.",
        url: "https://www.androidcentral.com/wearables/garmin-connect-beta-redesign-is-long-overdue",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/sqG6vZx4ZekZHq3sJ2ZBQU-1200-80.jpeg",
        publishedAt: "2024-01-08T12:00:00Z",
        content:
          "<ul><li>Garmin rolled out its new beta version of the Garmin Connect app on January 8. </li><li>New homepage categories like In Focus, At a Glance, Events, Training Plans, and Challenges are now avai… [+3206 chars]",
      },
      {
        source: { id: null, name: "Android Central" },
        author: "michael.hicks@futurenet.com (Michael L Hicks)",
        title:
          "XREAL wants to undercut the Apple Vision Pro with its 'Ultra' AR glasses",
        description:
          "XREAL is bringing us closer and closer to the futuristic vision of AR glasses that Google Glass hinted at years ago, at least in terms of compact hardware.",
        url: "https://www.androidcentral.com/gaming/virtual-reality/xreal-challenges-apple-vision-pro-with-air-2-ultra-ar-glasses",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/uttRSfVJbp2cx6cP3bh379-1200-80.jpeg",
        publishedAt: "2024-01-07T14:00:00Z",
        content:
          "<ul><li>The XREAL Air 2 Ultra was announced at CES 2024 and ships in March 2024 for $699.</li><li>Designed for developers, it adds 3D environment sensors for the first time, supporting handtracking a… [+3018 chars]",
      },
      {
        source: { id: null, name: "Android Central" },
        author: "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
        title: "The first exclusive Meta Quest 3 game is already here",
        description:
          "Townsmen VR is the first Meta Quest 3 exclusive game, making us wonder how long it will be before we see more exclusives.",
        url: "https://www.androidcentral.com/gaming/virtual-reality/townsmen-vr-meta-quest-3-exclusive",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/ea72giMWycteUo73nCTopR-1200-80.jpg",
        publishedAt: "2024-01-08T16:20:10Z",
        content:
          '<ul><li>Townsmen VR is now available on the Meta Quest 3 for $29.99.</li><li>It\'s a built-for-VR version of the classic medieval-themed city building game featuring "god game" elements and fully-inte… [+2477 chars]',
      },
      {
        source: { id: null, name: "Android Central" },
        author: "michael.hicks@futurenet.com (Michael L Hicks)",
        title:
          "Garmin needs to make its indoor workouts as compelling as its outdoor ones",
        description:
          "Garmin is the only brand we know of that tracks individual exercise moves like push-ups or deadlifts, with thousands of options. But it doesn't do nearly enough with this concept.",
        url: "https://www.androidcentral.com/wearables/garmin-needs-to-make-indoor-workouts-as-good-as-outdoor-ones",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/YZArwwvKK5b9fWPdS5HWAk-1200-80.jpeg",
        publishedAt: "2024-01-07T16:00:53Z",
        content:
          "(Image credit: Android Central)\r\nIn his weekly column, our Senior Editor of Wearables and Fitness Michael Hicks discusses the world of smartwatches, apps, and fitness tech related to running and heal… [+8704 chars]",
      },
      {
        source: { id: null, name: "CNET" },
        author: "Lisa Eadicicco",
        title:
          "Garmin's New Lily 2 Smartwatch Can Rate Your Sleep and Track Your Dance Moves - CNET",
        description:
          "The Lily 2 is an updated version of Garmin's fashionable watch with more sleep and exercise tracking features.",
        url: "https://www.cnet.com/tech/mobile/garmins-new-lily-2-smartwatch-can-rate-your-sleep-and-track-your-dance-moves/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/2e4bc3811134d2779e74da92893a3e8b689bb161/hub/2024/01/04/0a084e7f-c496-4dcd-9a41-153b0702d1c8/lily-2-family-all-skus-199.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-01-08T12:00:10Z",
        content:
          "Garmin just announced the Lily 2 at CES 2024, an updated version of its stylish smartwatch aimed at those who prefer sleeker watches. The new model has a few extra features that were missing from the… [+3271 chars]",
      },
      {
        source: { id: null, name: "CNET" },
        author: "Steven Musil",
        title:
          "This Smart Toothbrush Talks Through Your Bones to Improve Your Brushing - CNET",
        description:
          "The Oclean Ultra X includes custom modes, interactive touchscreens and AI voice tips to bolster your brushing technique.",
        url: "https://www.cnet.com/health/medical/this-smart-toothbrush-talks-through-your-bones-to-improve-your-brushing/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/c6daec8b5eb391a8acd1c60c3febe178a6e94e75/hub/2024/01/08/57962471-f878-4f2b-913e-a275c8299fc8/oclean-touthbrush-seq-00-01-39-09-still001.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-01-08T21:45:00Z",
        content:
          "You may have seen plenty of smart toothbrushes by now, but have you seen one that talks to you through your bones while you brush your teeth? Showcased at CES 2024, the Oclean X Ultra Wi-Fi Digital T… [+1594 chars]",
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
