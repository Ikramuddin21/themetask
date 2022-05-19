import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';
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
                <h2 className="themetask-heading">Themetask Collection</h2>
                <button className="see-more-btn">See More</button>
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