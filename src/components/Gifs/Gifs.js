import React from 'react'
import Gif from './Gif'
import './styles.css'

const Gifs = ({ gifs }) => {
    return (
        <div className="Gifs-layout">
            {gifs.map(singleGif => {
                return (
                    <Gif
                        title={singleGif.title}
                        id={singleGif.id}
                        url={singleGif.url} // {...singleGif}
                        key={singleGif.id}
                    />
                )
            })}
        </div>
    )
}

export default Gifs
