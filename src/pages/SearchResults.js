import React from 'react'
import useGif from '../hooks/useGif';
import Gifs from '../components/Gifs/Gifs'
import Spinner from '../components/Spinner/Spinner'
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs } = useGif(keyword);
    return <>
        {loading ? <Spinner /> :
            <div>
                <Helmet><title>GifGif | Results of {decodeURI(keyword)}</title></Helmet>
                <h3>{decodeURI(keyword)}</h3>
                <Gifs gifs={gifs} />
            </div>}
    </>
}

export default SearchResults
