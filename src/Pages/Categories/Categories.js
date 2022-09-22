import React, { useEffect, useState } from 'react';
import SkeletonCard from '../../skeleton/SkeletonCard';
import AllCategory from './AllCategory/AllCategory';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/carouselitems")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <>
            {
                !categories.length ?
                    <div className="themetask">
                        <div className="themetask-wrapper">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>
                    :
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
            }
        </>
    );
};

export default Categories;