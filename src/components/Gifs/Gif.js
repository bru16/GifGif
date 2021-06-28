import React from 'react'
import './styles.css'
import { Link } from 'wouter'

const Gif = ({ title, url, id }) => {
    return (
        <div className="Gif">
            <div>
                <h4>{title}</h4>
                <Link key={id} to={`/gif/${id}`}>
                    <img alt={title} src={url} />
                </Link>
            </div>
        </div>
    )
}

export default React.memo(Gif)
