import React from 'react'
import Gif from './Gif'
import { Link } from 'wouter'

const Gifs = ({ gifs }) => {
    return (
        <div>
            {gifs.map(singleGif => {
                return (
                    <Link key={singleGif.id} to={`/gif/${singleGif.id}`}>
                        <div>
                            <Gif
                                title={singleGif.title}
                                id={singleGif.id}
                                url={singleGif.url} // {...singleGif}
                            />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Gifs
