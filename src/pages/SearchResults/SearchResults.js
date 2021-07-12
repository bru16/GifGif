import React from 'react'
import useGif from '../../hooks/useGif';
import Gifs from '../../components/Gifs/Gifs'
import Spinner from '../../components/Spinner/Spinner'
import { Helmet } from "react-helmet-async";
import SearchForm from '../../components/SearchForm/SearchForm'

const SearchResults = ({ params }) => {
    const { keyword, rating } = params;
    const { loading, gifs } = useGif(keyword, rating);

    if (loading) return <Spinner />

    return (
        <>
            <Helmet><title>GifGif | Results of {decodeURI(keyword)}</title></Helmet>
            <h2>Results of {decodeURI(keyword)}</h2>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
            {gifs.length > 0 ? <Gifs gifs={gifs} /> : `Results of "${decodeURI(keyword)}" not found`}
        </>
    )
}

export default SearchResults
