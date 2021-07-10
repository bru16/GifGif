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
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={handleKeyword} />
                <div>
                    <button><strong>Search <i className="fa fa-search"></i></strong></button>
                    <select value={rating} onChange={handleRating}>
                        <option disabled>Ratings</option>
                        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                    </select>
                </div>
            </form>
        </>
    )
}

export default React.memo(SearchForm);