import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const GameAll = () => {
    const [gameAll, setGameAll] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/50?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setGameAll(data.category_image))
    }, []);

    return (
        <div className="themetask">
            <h2 className="themetask-heading">{gameAll.length} Resources</h2>
            <div className="themetask-wrapper">
                {
                    gameAll.map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default GameAll;