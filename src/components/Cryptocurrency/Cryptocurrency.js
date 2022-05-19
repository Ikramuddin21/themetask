import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const Cryptocurrency = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/51?user_id=216")
            .then(res => res.json())
            .then(data => setCryptocurrency(data.category_image));
    }, []);

    return (
        <div className="themetask">
            <div className="themetask-top-area">
                <h2 className="themetask-heading">Cryptocurrency</h2>
                <button className="see-more-btn">See More</button>
            </div>
            <div className="themetask-wrapper">
                {
                    cryptocurrency.slice(0, 8).map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default Cryptocurrency;