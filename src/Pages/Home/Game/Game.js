import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';

const Game = () => {
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/50?user_id=216")
            .then(res => res.json())
            .then(data => setGame(data.category_image));
    }, []);

    return (
        <div className="themetask">
            <div className="themetask-top-area">
                <h2>Game</h2>
                <Link to="/category/game/50">
                    <button className="see-more-btn">See More</button>
                </Link>
            </div>
            <div className="themetask-wrapper">
                {
                    game.slice(0, 8).map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default Game;