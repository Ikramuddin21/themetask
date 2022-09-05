import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';
import './Themetask.css';

const Themetask = () => {

    const [themestask, setThemestask] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/53?limit=16&user_id=216")
            .then(res => res.json())
            .then(data => setThemestask(data.category_image))
    }, []);

    return (
        // themetask container
        <div className="themetask">
            <div className="themetask-top-area">
                <h2>Themetask Collection</h2>
                <Link to="/category/piktask-collection/53">
                    <button className="see-more-btn">See More</button>
                </Link>
            </div>
            <div className="themetask-wrapper">
                {
                    themestask.map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default Themetask;