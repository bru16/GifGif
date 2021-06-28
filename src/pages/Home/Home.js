import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import './styles.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Helmet } from "react-helmet";

const Home = () => {
    const lastSearched = localStorage.getItem('lastSearched');
    const [, pushLocation] = useLocation();
    const { loading, gifs, setPage, loadingNextGifs } = useGif();

    const handleSubmit = useCallback(keyword => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation]);

    if (loading) return <Spinner />
    return (
        <>
            <Helmet><title>GifGif | Home</title></Helmet>
            <div className="home">
                <h2>{lastSearched ? `Last search: ${lastSearched}` : 'Trending'}</h2>
                <SearchForm search={handleSubmit} />
                <Gifs gifs={gifs} />
            </div>
            <br />
            {loadingNextGifs && <Spinner />}
            <button onClick={() => setPage(prevPage => prevPage + 1)}>Load more gifs</button>
        </>
    )
}

export default Home
