import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const Recent = () => {
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/images?sort_by=recent&limit=60&page=1")
            .then(res => res.json())
            .then(data => setRecent(data.images))
    }, []);

    return (
        <div className="themetask">
            <div className="themetask-top-area">
                <h2>Recent Images</h2>
            </div>
            <div className="themetask-wrapper">
                {
                    recent.map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default Recent;