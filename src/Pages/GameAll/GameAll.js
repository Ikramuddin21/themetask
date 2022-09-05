import React, { useEffect, useState } from 'react';
import PopularSearch from '../Shared/PopularSearch/PopularSearch';
import ThemetaskPresentational from '../Shared/ThemetaskPresentational/ThemetaskPresentational';

const GameAll = () => {
    const [gameAll, setGameAll] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/50?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setGameAll(data.category_image))
    }, []);

    return (
        <>
            <div className="themetask">
                <div className="themetask-top-area">
                    <h2>{gameAll.length} Resources</h2>
                </div>
                <div className="themetask-wrapper">
                    {
                        gameAll.map(theme => <ThemetaskPresentational
                            key={theme.image_id}
                            theme={theme}
                        />)
                    }
                </div>
            </div>

            {/* popular search tags */}
            <PopularSearch />
        </>
    );
};

export default GameAll;