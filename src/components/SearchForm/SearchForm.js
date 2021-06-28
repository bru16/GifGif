import React, { useState } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {
    const [rating, setRating] = useState(initialRating);
    const [keyword, setKeyword] = useState(initialKeyword);
    const [, pushLocation] = useLocation();
    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}/${rating}`);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={e => setKeyword(e.target.value)} />
                <button>Go</button>
                <select value={rating} onChange={e => setRating(e.target.value)}>
                    <option disabled>Ratings</option>
                    {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                </select>
            </form>
        </>
    )
}

export default React.memo(SearchForm);
