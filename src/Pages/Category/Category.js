import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import SkeletonCard from '../../skeleton/SkeletonCard';
import PopularSearch from '../Shared/PopularSearch/PopularSearch';
import ThemetaskPresentational from '../Shared/ThemetaskPresentational/ThemetaskPresentational';

const Category = () => {
    const { name } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const url = `https://themetask-server.onrender.com/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [name]);

    return (
        <>
            {
                !category.length ?
                    <div className="themetask">
                        <div className="themetask-top-area">
                            <h2><Skeleton width="160px" height="12px" /></h2>
                        </div>
                        <div className="themetask-wrapper">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>
                    :
                    <div className="themetask">
                        <div className="themetask-top-area">
                            <h2>{category.length} Resources</h2>
                        </div>
                        <div className="themetask-wrapper">
                            {
                                category.map(theme => <ThemetaskPresentational
                                    key={theme.image_id}
                                    theme={theme}
                                />)
                            }
                        </div>
                    </div>
            }

            {/* popular search tags */}
            <PopularSearch />
        </>
    );
};

export default Category;