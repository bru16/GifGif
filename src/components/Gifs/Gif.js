import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import Fav from '../Fav/Fav'

const Gif = ({ title, url, id }) => {
    return (
        <div className="Gif">
            <Fav id={id} />
            <div className="tooltip">
                <button className="share-btn" onClick={() => navigator.clipboard.writeText(url)}>🔗</button>
                <span className="tooltiptext">Copy url</span>
            </div>
            <Link key={id} to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif)
