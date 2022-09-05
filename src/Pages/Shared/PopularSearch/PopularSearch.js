import React, { useEffect, useState } from 'react';

const PopularSearch = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/client/search/popular_keyword?limit=10}")
        .then(res => res.json())
        .then(data => setTags(data.keywords))
    }, []);

    return (
        <div className="tags">
            <h2>Popular Search</h2>
            {
                tags.map((tag, index) => tag.length > 0 && <button key={index}>{tag}</button>)
            }
        </div>
    );
};

export default PopularSearch;