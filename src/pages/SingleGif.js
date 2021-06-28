import React from 'react'
import Gif from '../components/Gifs/Gif'
import useSingleGif from '../hooks/useSingleGif'
import Spinner from '../components/Spinner/Spinner'
import { Helmet } from "react-helmet";

const SingleGif = ({ params }) => {
    const { id } = params;
    const { gif } = useSingleGif(id);
    if (gif) return (
        <>
            <Helmet>
                <title>{gif.title}</title>
            </Helmet>
            <Gif {...gif} />
        </>
    )

    return (
        <Spinner />
    )
}


export default SingleGif