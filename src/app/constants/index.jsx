export const TV_GENRES = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];
export const MOVIE_GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const MOVIE_GENRES_MAP = [
  {
    28: "Action",

    12: "Adventure",

    16: "Animation",

    35: "Comedy",

    80: "Crime",

    99: "Documentary",

    18: "Drama",
    10751: "Family",

    14: "Fantasy",

    36: "History",
    27: "Horror",

    10402: "Music",

    9648: "Mystery",

    10749: "Romance",

    878: "Science Fiction",

    10770: "TV Movie",

    53: "Thriller",
    10752: "War",

    37: "Western",
  },
];

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";
export const API_KEY_QUERY_PARAM = "api_key=5ab81238f51483488c57542fc90bbe50";

export const API = {
  nowPlaying: `${TMDB_BASE_URL}/movie/now_playing?${API_KEY_QUERY_PARAM}&language=en-US&page=1&append_to_response=images`,
  search(type = "multi", query, page = 1) {
    return `${TMDB_BASE_URL}/search/${type}?query=${query}&${API_KEY_QUERY_PARAM}&page=${page}`;
  },
  recommend(id, type) {
    return `${TMDB_BASE_URL}/${type}/${id}/recommendations?${API_KEY_QUERY_PARAM}`;
  },
  details(id, type) {
    return `${TMDB_BASE_URL}/${type}/${id}?${API_KEY_QUERY_PARAM}`;
  },
  trending(type, page) {
    return `${TMDB_BASE_URL}/trending/${type}/week?language=en-US&${API_KEY_QUERY_PARAM}&append_to_response=images&page=${page}`;
  },
  image(path) {
    return `${TMDB_IMG_BASE_URL}${path}`;
  },
  topRated: {
    movies: `${TMDB_BASE_URL}/movie/top_rated?${API_KEY_QUERY_PARAM}&language=en-US&page=1&append_to_response=images`,
    tv: `${TMDB_BASE_URL}/tv/top_rated?${API_KEY_QUERY_PARAM}&language=en-US&page=1&append_to_response=images`,
  },
  popular: {
    movies: `${TMDB_BASE_URL}/movie/popular?${API_KEY_QUERY_PARAM}&language=en-US&page=1&append_to_response=images`,
    tv: `${TMDB_BASE_URL}/tv/popular?${API_KEY_QUERY_PARAM}&language=en-US&page=1&append_to_response=images`,
  },
  moviesByGenre(genre) {
    return `${TMDB_BASE_URL}/discover/movie?${API_KEY_QUERY_PARAM}&language=en-US&page=1&with_genres=${genre}&append_to_response=images`;
  },
  seriesByGenre(genre) {
    return `${TMDB_BASE_URL}/discover/tv?${API_KEY_QUERY_PARAM}&language=en-US&page=1&with_genres=${genre}&append_to_response=images`;
  },
};
