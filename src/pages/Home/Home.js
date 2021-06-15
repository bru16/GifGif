import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs'

const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGif();

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    if (loading) return <h3>Loading...</h3>

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search a gif" onChange={e => setKeyword(e.target.value)} />
            </form>
            <Gifs gifs={gifs} />
        </div>
    )
}

export default Home
