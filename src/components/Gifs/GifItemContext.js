import React from 'react'
import Gif from './Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

const GifItemContext = ({ params }) => {
    const { id } = params;
    const { gifs } = useGlobalGifs();
    const gif = gifs.find(g => g.id === id)
    console.log(gif)
    if (gif) return <Gif {...gif} />

    return (
        <h1>Not gif found :(</h1>
    )
}


export default GifItemContext
