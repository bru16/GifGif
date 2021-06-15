import React from 'react'
import useGif from '../hooks/useGif';
import Gifs from '../components/Gifs/Gifs'
import Spinner from '../components/Spinner/Spinner'

const SearchResults = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs } = useGif(keyword);

    return <>
        {loading ? <Spinner /> : <Gifs gifs={gifs} />}
    </>
}

export default SearchResults
