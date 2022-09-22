import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../../skeleton/SkeletonCard';
import ThemetaskPresentational from '../Shared/ThemetaskPresentational/ThemetaskPresentational';

const Recent = () => {
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/texteffect")
            .then(res => res.json())
            .then(data => setRecent(data))
    }, []);

    return (
        <>
            {
                !recent.length ?
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
            }
        </>
    );
};

export default Recent;