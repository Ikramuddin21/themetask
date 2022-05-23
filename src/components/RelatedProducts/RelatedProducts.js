import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const RelatedProducts = ({ image_id }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const url = `https://piktask.com/api/images/${image_id}/related_image?limit=28&page=1&user_id=216`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRelatedProducts(data.images))
    }, [image_id]);

    return (
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
    );
};

export default RelatedProducts;