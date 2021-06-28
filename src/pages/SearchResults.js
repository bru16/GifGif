import React from 'react'
import useGif from '../hooks/useGif';
import Gifs from '../components/Gifs/Gifs'
import Spinner from '../components/Spinner/Spinner'
import { Helmet } from "react-helmet";
import SearchForm from '../components/SearchForm/SearchForm'

const SearchResults = ({ params }) => {
    const { keyword, rating } = params;
    const { loading, gifs } = useGif(keyword, rating);
    return <>
        {loading ? <Spinner /> :
            <div>
                <Helmet><title>GifGif | Results of {decodeURI(keyword)}</title></Helmet>
                <h3>{decodeURI(keyword)}</h3>
                <SearchForm initialKeyword={keyword} initialRating={rating} />
                <Gifs gifs={gifs} />
            </div>}
    </>
}

export default SearchResults
