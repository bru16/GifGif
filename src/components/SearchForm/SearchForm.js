import React, { useState } from 'react'

const SearchForm = ({ search }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        search(keyword);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} placeholder="Search gifs..." onChange={e => setKeyword(e.target.value)} />
                <button>Go</button>
            </form>
        </>
    )
}

export default React.memo(SearchForm);
