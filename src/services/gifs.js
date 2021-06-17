const API_KEY = '8NRnNns9qM6YCtAf26w97UNi66Xef7jM';
const defaultGif = {
    title: 'Gif not found',
    url: 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif',
    id: '14213124215'
}
const API = 'https://api.giphy.com/v1/gifs';
const LIMIT = 15;

// get specific gifs that matches the keyword. 
export const fetchGifs = async (keyword, page = 0) => {
    const API_URL = `${API}/search?api_key=${API_KEY}&q=${keyword}&limit=${LIMIT}&offset=${page * LIMIT}&rating=r&lang=en'`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data } = response;
        return data.map(gif => {
            const { title, images, id } = gif;
            const { url } = images.downsized_medium;
            return { title, url, id }
        });
    } catch (error) {
        console.log(error);
    }
}

// get gif by ID
export const fetchGif = async (id) => {
    const API_URL = `${API}/${id}?api_key=8NRnNns9qM6YCtAf26w97UNi66Xef7jM`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data, meta } = response;
        if (meta.status === 404) return defaultGif;
        const { title, images, id } = data;
        const { url } = images.downsized_medium;
        return { title, url, id }
    } catch (error) {
        console.log(error)
    }
}

// get the Trending Gifs in the day. The content is continuously updated (API)
export const fetchTrendingGifs = async (page = 0) => {
    const API_URL = `${API}/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${page * LIMIT}`;
    try {
        const res = await fetch(API_URL);
        const response = await res.json();
        const { data } = response;
        return data.map(gif => {
            const { title, images, id } = gif;
            const { url } = images.downsized_medium;
            return { title, url, id }
        });
    } catch (error) {
        console.log(error);
    }
}