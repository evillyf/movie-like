const TMDB_BASE_URL = "https://api.themoviedb.org/3"
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p"
const YOUTUBE_BASE_URL = "https://youtube.com/watch"


const TMDB_API_KEY = "f48357e6eac3e7c39cf91e2288176e5b"

const ENDPOINTS = {
    NOW_PLAYING_MOVIES: "/movie/now_playing?&language=pt-BR",
    UPCOMING_MOVIES: "/movie/upcoming?&language=pt-BR",
    GENRES: "/genre/movie/list?&language=pt-BR",
    MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
    VIDEOS: "videos",
    CREDITS: "credits",
    RECOMMENDATIONS: "recommendations",
    SIMILAR: "similar",
};

export {TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS, APPEND_TO_RESPONSE, YOUTUBE_BASE_URL};
