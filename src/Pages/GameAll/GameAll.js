import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../../skeleton/SkeletonCard';
import PopularSearch from '../Shared/PopularSearch/PopularSearch';
import ThemetaskPresentational from '../Shared/ThemetaskPresentational/ThemetaskPresentational';

const GameAll = () => {
    const [gameAll, setGameAll] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/game")
            .then(res => res.json())
            .then(data => setGameAll(data))
    }, []);

    return (
        <>
            {
                !gameAll.length ?
                    <div className="themetask">
                        <div className="themetask-top-area">
                            <h2><Skeleton width="160px" height="12px" /></h2>
                        </div>
                        <div className="themetask-wrapper">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>
                    :
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
            }

            {/* popular search tags */}
            <PopularSearch />
        </>
    );
};

export default GameAll;