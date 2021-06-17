import { useState, useEffect } from 'react';
import { fetchGifs } from '../services/gifs'
import useGlobalGifs from '../hooks/useGlobalGifs'

const useGif = (keyword) => {
    const { gifs, setGifs } = useGlobalGifs();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const keywordToUse = keyword || localStorage.getItem('lastSearched') || 'random';
        setLoading(true);
        async function fetch() {
            const fetchedGifs = await fetchGifs(keywordToUse);
            setGifs(fetchedGifs);
            setLoading(false);
            localStorage.setItem('lastSearched', keywordToUse);
        }
        fetch();
    }, [keyword, setGifs]);

    return { loading, gifs };
}

export default useGif
