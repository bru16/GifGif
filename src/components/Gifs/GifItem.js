import React, { useState, useEffect } from 'react'
import { fetchGif } from '../../services/gifs'
import Gif from './Gif'
import Spinner from '../Spinner/Spinner'

const GifItem = ({ params }) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = params;
    useEffect(() => {
        setLoading(true);
        async function fetch() {
            const gifFetched = await fetchGif(id);
            setGif(gifFetched);
            setLoading(false);
        }
        fetch();
    }, [id]);

    return (<>
        {loading ? <Spinner /> : <Gif title={gif.title} url={gif.url} id={id} />}
    </>
    )
}

export default GifItem
