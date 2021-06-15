import React from 'react'
import useGif from '../hooks/useGif';
import Gifs from '../components/Gifs'

const SearchResults = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs } = useGif(keyword);

    return <>
        {loading ? <h3>Loading...</h3> : <Gifs gifs={gifs} />}
    </>
}

export default SearchResults
