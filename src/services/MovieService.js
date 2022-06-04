const axios = require("axios").default;
import { TMDB_BASE_URL, 
    TMDB_API_KEY,
    TMDB_IMAGE_BASE_URL, 
    ENDPOINTS, 
<<<<<<< HEAD
    YOUTUBE_BASE_URL,
=======
>>>>>>> 9a21a93faf3bfc92831e977033ef7027b2cdb7b3
} from "../constants/Urls";
import LANGUAGES from "../constants/Languages";


const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE_URL,
    params:{
        api_key: TMDB_API_KEY,
    },
});


const getNowPlayingMovies = () =>
    TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);


const getUpcomingMovies = () =>
    TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

<<<<<<< HEAD
const getMovieById = (movieId, append_to_response="") =>
    TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE}/${movieId}`, append_to_response ? {params: {append_to_response}} : null);    
=======
>>>>>>> 9a21a93faf3bfc92831e977033ef7027b2cdb7b3

const getAllGenres = () =>
    TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

<<<<<<< HEAD
const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;


const getLanguage = (language_iso) => LANGUAGES.find((language) => language.iso_639_1 === language_iso); 

export { getNowPlayingMovies, getUpcomingMovies, getMovieById, getAllGenres, getPoster, getLanguage, getVideo };
=======
const getLanguage = (language_iso) => LANGUAGES.find((language) => language.iso_639_1 === language_iso); 

export { getNowPlayingMovies, getUpcomingMovies, getAllGenres, getPoster, getLanguage };
>>>>>>> 9a21a93faf3bfc92831e977033ef7027b2cdb7b3
