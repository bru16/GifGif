import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import './styles.css'

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [, pushLocation] = useLocation();
    const { loading, gifs, setPage, loadingNextGifs } = useGif();
    const lastSearched = localStorage.getItem('lastSearched');
    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    if (loading) return <Spinner />
    return (
        <>
            <div className="home">
                <h2>{lastSearched ? `Last search: ${lastSearched}` : 'Trending'}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={keyword} placeholder="Search gifs..." onChange={e => setKeyword(e.target.value)} />
                </form>
                <Gifs gifs={gifs} />
            </div>
            <br />
            {loadingNextGifs && <Spinner />}
            <button onClick={() => setPage(prevPage => prevPage + 1)}>Load more gifs</button>
        </>
    )
}

export default Home
