import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import { fetchGifs } from '../services/gifs';
import { Link } from 'wouter'

const Gifs = ({ params }) => {
    const { keyword } = params;
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

    if (loading) return <h3>Loading...</h3>

    return (
        <div>
            {gifs.map(singleGif => {
                return (
                    <Link key={singleGif.id} to={`/gif/${singleGif.id}`}>
                        <div>
                            <Gif
                                title={singleGif.title}
                                id={singleGif.id}
                                url={singleGif.url} // {...singleGif}
                            />
                        </div>
                    </Link>)
            })}
        </div>
    )
}

export default Gifs
