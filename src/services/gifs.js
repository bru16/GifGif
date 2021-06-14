const API_KEY = '8NRnNns9qM6YCtAf26w97UNi66Xef7jM'

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