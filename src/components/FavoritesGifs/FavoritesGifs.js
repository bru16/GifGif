import React, { useState, useEffect } from 'react'
import useUser from '../../hooks/useUser'
import Gifs from '../Gifs/Gifs'
import { fetchGifsByIds } from '../../services/gifs'
import Spinner from '../Spinner/Spinner'

const FavoritesGifs = () => {

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { favs } = useUser();

    useEffect(() => {
        setLoading(true)
        async function fetchGifs(favs) {
            const fetchedGifs = await fetchGifsByIds({ favs });
            setGifs(fetchedGifs);
            setLoading(false);
        }
        if (favs.length > 0) fetchGifs(favs);
    }, [favs])

    if (favs.length === 0) return <h4>Not favorites gifs found :(</h4>
    if (loading) return <Spinner />

    return <Gifs gifs={gifs} />
}

export default FavoritesGifs
