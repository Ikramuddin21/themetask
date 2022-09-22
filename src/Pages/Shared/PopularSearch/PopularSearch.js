import React from 'react';
import { popularSearch } from '../../../temp/info';

const PopularSearch = () => {
    return (
        <div className="tags">
            <h2>Popular Search</h2>
            {
                popularSearch.map((tag, index) => tag.length > 0 && <button key={index}>{tag}</button>)
            }
        </div>
    );
};

export default PopularSearch;