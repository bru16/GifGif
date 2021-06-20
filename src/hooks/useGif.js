import { useState, useEffect } from 'react';
import { fetchGifs, fetchTrendingGifs } from '../services/gifs'
import useGlobalGifs from '../hooks/useGlobalGifs'

const INITIAL_PAGE = 0;

const useGif = (keyword) => {
    const keywordToUse = keyword || localStorage.getItem('lastSearched') || null;

    const { gifs, setGifs } = useGlobalGifs();
    const [loading, setLoading] = useState(false);
    const [loadingNextGifs, setLoadingNextGifs] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE);

    useEffect(() => {
        setLoading(true);
        async function fetch() {
            if (keywordToUse === null) {
                const fetchedGifs = await fetchTrendingGifs();
                setGifs(fetchedGifs);
            }
            else {
                const fetchedGifs = await fetchGifs(keywordToUse);
                setGifs(fetchedGifs);
                localStorage.setItem('lastSearched', keywordToUse);
            }
            setLoading(false);
        }
        fetch();
    }, [keyword, setGifs, keywordToUse]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;
        setLoadingNextGifs(true);
        async function fetch() {
            if (keywordToUse === null) {
                const fetchedGifs = await fetchTrendingGifs(page);
                setGifs(prevGifs => prevGifs.concat(fetchedGifs));
                setLoadingNextGifs(false);
            }
            else {
                const fetchedGifs = await fetchGifs(keywordToUse, page);
                setGifs(prevGifs => prevGifs.concat(fetchedGifs));
                setLoadingNextGifs(false);
            }
        }
        fetch();
    }, [page, keywordToUse, setGifs])


    return { loading, gifs, setPage, loadingNextGifs };
}

export default useGif
