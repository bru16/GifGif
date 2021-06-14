import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import { fetchGifs } from '../services/gifs';
const Gifs = ({ keyword }) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        async function fetch() {
            const fetchedGifs = await fetchGifs(keyword);
            setGifs(fetchedGifs);
        }
        fetch();
    }, [keyword]);

    return (
        <div>
            {gifs.map(singleGif =>
                <Gif
                    key={singleGif.id}
                    title={singleGif.title}
                    id={singleGif.id}
                    url={singleGif.url} // {...singleGif}
                />)}
        </div>
    )
}

export default Gifs
