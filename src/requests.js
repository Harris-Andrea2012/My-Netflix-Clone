const API_KEY = '1b45f087d2154b585fa0f8c033763d39';

const requests = {
    getTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    getOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getAction: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28`,
    getAnimation: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=16&with_original_language=ja`,
    getRomance: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749`,
    getDocs: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99`,
    getHorror: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27`

}


export default requests;