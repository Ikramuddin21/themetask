import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PopularSearch from '../PopularSearch/PopularSearch';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const url = `https://piktask.com/api/categories/${id}?limit=32&page=1`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data.category_image))
    }, [id]);

    return (
        <>
            <div className="themetask">
                <h2 className="themetask-heading">{category.length} Resources</h2>
                <div className="themetask-wrapper">
                    {
                        category.map(theme => <ThemetaskPresentational
                            key={theme.image_id}
                            theme={theme}
                        />)
                    }
                </div>
            </div>

            {/* popular search tags */}
            <PopularSearch />
        </>
    );
};

export default Category;