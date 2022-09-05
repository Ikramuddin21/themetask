import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';

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
                <h2>Cryptocurrency</h2>
                <Link to="/category/cryptocurrency/51">
                    <button className="see-more-btn">See More</button>
                </Link>
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