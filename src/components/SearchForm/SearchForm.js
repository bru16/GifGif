import React from 'react'
import { useLocation } from 'wouter'
import './styles.css'
import useForm from './useForm';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {

    const [, pushLocation] = useLocation();
    const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating });

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}/${rating}`);
    }

    const handleKeyword = e => {
        updateKeyword(e.target.value);
    }

    const handleRating = e => {
        updateRating(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={handleKeyword} />
                <button>Go</button>
                <select value={rating} onChange={handleRating}>
                    <option disabled>Ratings</option>
                    {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                </select>
            </form>
        </>
    )
}

export default React.memo(SearchForm);