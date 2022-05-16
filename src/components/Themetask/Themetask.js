import React, { useEffect, useState } from 'react';
import ThemetaskParent from '../ThemetaskPresentational/ThemetaskPresentational';
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
            <h2>Themetask Collection</h2>
            <div className="themetask-wrapper">
                {
                    themestask.map(themetask => <ThemetaskParent
                        key={themetask.image_id}
                        themetask={themetask} theme-presentational
                    />)
                }
            </div>
        </div>
    );
};

export default Themetask;