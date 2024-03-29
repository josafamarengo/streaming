const API_KEY ='f4a6dcbf58552f9f7766293b247a8a38';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Em alta',
                items: await basicFetch(`/trending/movie/week?language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`)
            },
            {
                slug: 'toprated',
                title: 'Clássicos',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=5000`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=2000`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=500`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=50`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info =await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info =await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}

