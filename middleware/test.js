const fetch = require('node-fetch');

const API_KEY = "ed24c8a89a8db56597656123dbf99eb0";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
const COMEDY_URL = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=comedy&with_watch_monetization_types=flatrate";

//console.log(BASE_URL+API_KEY+COMEDY_URL);

const generToURL = {
    "Comedy": "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=comedy&with_watch_monetization_types=flatrate",
    "Adventure": "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=adventure&with_watch_monetization_types=flatrate",
    "Fantasy": "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=fantasy&with_watch_monetization_types=flatrate",
    "Animation": "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=animation&with_watch_monetization_types=flatrate",
    "Family": "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=family&with_watch_monetization_types=flatrate",
}

function generateURL(gener) {
    return BASE_URL+ API_KEY + generToURL[gener];
}


async function getFiveMovies(gener) {

    url = generateURL(gener);
    fetch(url).then(res => res.json()).then(data => {
            console.log(data.results.slice(0,4))
            return data.results.slice(0,4);
        }
    )

}

function getResults(gener) {
    return getFiveMovies(gener);
}