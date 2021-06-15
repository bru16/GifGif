const API_KEY = '8NRnNns9qM6YCtAf26w97UNi66Xef7jM';
const defaultGif = {
    title: 'Gif not found',
    url: 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif',
    id: '14213124215'
}

export const fetchGifs = async (keyword) => {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=0&rating=g&lang=en'`;
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
    const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=8NRnNns9qM6YCtAf26w97UNi66Xef7jM`;
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