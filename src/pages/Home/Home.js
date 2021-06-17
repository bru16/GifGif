import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import './styles.css'

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [, pushLocation] = useLocation();
    const { loading, gifs } = useGif();

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    if (loading) return <Spinner />

    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={e => setKeyword(e.target.value)} />
            </form>
            <h2>Last Searched:</h2>
            <Gifs gifs={gifs} />
        </div>
    )
}

export default Home
