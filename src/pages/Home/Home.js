import React, { useState, useEffect } from 'react'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import './styles.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import { Helmet } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroll-component";
import debounce from "just-debounce-it";


const Home = () => {

    const lastSearched = localStorage.getItem('lastSearched');
    const { loading, gifs, setPage } = useGif();
    const [hasMore, setHasMore] = useState(true);

    // after 1.5s the function is executed, even though it was called multiple times.
    const handleNextPage = debounce(() => {
        setPage(prevPage => prevPage + 1)
        if (gifs.length > 50) setHasMore(false);
    }, 1500);

    if (loading) return <Spinner />

    return (
        <>
            <Helmet><title>GifGif | Home</title></Helmet>
            <div className="home">
                <h2>{lastSearched ? `Last search: ${lastSearched}` : 'Trending 🔥'}</h2>
                <SearchForm />
                {gifs.length > 0 ? <InfiniteScroll hasMore={hasMore} next={handleNextPage} loader={<Spinner />} dataLength={gifs.length}>
                    <Gifs gifs={gifs} />
                </InfiniteScroll> : <h4>No gifs were found about your last search, please try again.</h4>}
            </div>
            <br />
        </>
    )
}

export default Home
