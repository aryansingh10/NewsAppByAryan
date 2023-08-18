const home = document.querySelector('#Home');
const buisness = document.querySelector('#business');
const Technology = document.querySelector('#technology');
const Sports = document.querySelector('#sport');
const Entertainment = document.querySelector('#entertainment');
const NewsType = document.querySelector('#newstype');
const queryNews=document.querySelector('#newsQuery')
const NewsDetails = document.querySelector('#newsdetails');

let NewsDataArray = [];

const API_KEY = "634570d08d364efeb8d0b9e174a4eba8";
const headlines = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GeneralNews = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const buisnessHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const TechnologyHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=";
const SportsHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const EnterHeadlines = "https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=";
const SearchNews = "https://newsapi.org/v2/everything?q=";

const fetchHeadlines = async () => {
    const response = await fetch(headlines + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}


window.onload=fetchHeadlines();

home.addEventListener('click', () => {
    fetchHomeNews();
});

buisness.addEventListener('click', () => {
    fetchBuisness();
});

Technology.addEventListener('click', () => {
    fetchTechnology();
});

Sports.addEventListener('click', () => {
    fetchSports();
});

Entertainment.addEventListener('click', () => {
    fetchEntertainment();
});
queryNews.addEventListener('input',()=>{
fetchQueryNews();
})




const fetchHomeNews = async () => {
    const response = await fetch(GeneralNews + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchBuisness = async () => {
    const response = await fetch(buisnessHeadlines + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnology = async () => {
    const response = await fetch(TechnologyHeadlines + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSports = async () => {
    const response = await fetch(SportsHeadlines + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainment = async () => {
    const response = await fetch(EnterHeadlines + API_KEY);
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(`${SearchNews}${newsQuery.value}&apiKey=${API_KEY}`);
    if (response===null) {
        return;
        
        
    }
    NewsDataArray = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        NewsDataArray = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
   
}




function displayNews() {
    NewsDetails.innerHTML = '';

    if (NewsDataArray.length === 0) {
        NewsDetails.innerHTML = "<h5> No Data Found</h5>";
        return;
    }
    NewsDataArray.forEach(news => {
        let date = news.publishedAt.split("T");
        let col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2";

        let card = document.createElement('div');
        card.className = 'p-2';

        let image = document.createElement("img");
        image.setAttribute('height', "matchparent");
        image.setAttribute('width', "100%");
        image.src = news.urlToImage;

        let cardBody = document.createElement('div');

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerText = `${news.title}`;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-muted mt-n1 mb-0";
        dateHeading.innerHTML = date[0];

        let description = document.createElement('p');
        description.className = "text-dark";
        description.innerText = news.description;

        let links = document.createElement('a');
        links.className = "btn btn-dark";
        links.setAttribute('target', '_blank');
        links.href = `${news.url}`;
        links.innerText = 'Read More';

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(links);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);
        NewsDetails.appendChild(col);
    });
}
