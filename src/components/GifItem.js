import React, { useState, useEffect } from 'react'
import { fetchGif } from '../services/gifs'
import Gif from './Gif'

const GifItem = ({ params }) => {
    const [gif, setGif] = useState('');
    const { id } = params;
    useEffect(() => {
        async function fetch() {
            const gifFetched = await fetchGif(id);
            setGif(gifFetched)
        }
        fetch();
    }, [id]);

    return (
        <div>
            <Gif title={gif.title} url={gif.url} id={id} />
        </div>
    )
}

export default GifItem
