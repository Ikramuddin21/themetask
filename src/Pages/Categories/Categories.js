import React, { useEffect, useState } from 'react';
import AllCategory from './AllCategory/AllCategory';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/popular?limit=50")
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);

    return (
        <div className="themetask">
            <div className="themetask-wrapper">
                {
                    categories.map(category => <AllCategory
                        key={category.id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;