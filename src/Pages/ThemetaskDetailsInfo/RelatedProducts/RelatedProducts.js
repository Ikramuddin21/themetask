import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../../../skeleton/SkeletonCard';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';

const RelatedProducts = ({ category }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const url = `https://themetask-server.onrender.com/${category}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRelatedProducts(data))
    }, [category]);

    return (
        <>
            {
                !relatedProducts.length ?
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
                            <h2>Related Products</h2>
                        </div>
                        <div className="themetask-wrapper">
                            {
                                relatedProducts.map(theme => <ThemetaskPresentational
                                    key={theme.image_id}
                                    theme={theme}
                                />)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default RelatedProducts;