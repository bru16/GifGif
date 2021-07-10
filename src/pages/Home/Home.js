import React from 'react'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import './styles.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Helmet } from "react-helmet-async";

const Home = () => {
    const lastSearched = localStorage.getItem('lastSearched');
    const { loading, gifs, setPage, loadingNextGifs } = useGif();
    if (loading) return <Spinner />

    return (
        <>
            <Helmet><title>GifGif | Home</title></Helmet>
            <div className="home">
                <h2>{lastSearched ? `Last search: ${lastSearched}` : 'Trending'}</h2>
                <SearchForm />
                <Gifs gifs={gifs} />
            </div>
            <br />
            {loadingNextGifs && <Spinner />}
            <button onClick={() => setPage(prevPage => prevPage + 1)}>Load more gifs</button>
        </>
    )
}

export default Home
