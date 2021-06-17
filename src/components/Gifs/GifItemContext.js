import React from 'react'
import Gif from './Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

const GifItemContext = ({ params }) => {
    console.log('Context :)')
    const { id } = params;
    const { gifs } = useGlobalGifs();
    const gif = gifs.find(g => g.id === id)
    return (
        <Gif {...gif} />
    )
}

export default GifItemContext
