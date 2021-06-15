import { useState, useEffect } from 'react';
import { fetchGifs } from '../services/gifs'

const useGif = (keyword) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetch() {
            const fetchedGifs = await fetchGifs(keyword);
            setGifs(fetchedGifs);
            setLoading(false);
        }
        fetch();
    }, [keyword]);

    return { loading, gifs };
}

export default useGif
