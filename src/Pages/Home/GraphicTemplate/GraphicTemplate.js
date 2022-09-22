import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import SkeletonCard from '../../../skeleton/SkeletonCard';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';

const GraphicTemplate = () => {

    const [graphic, setGraphic] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/themetask")
            .then(res => res.json())
            .then(data => setGraphic(data.slice(0, 8)));
    }, []);

    return (
        <>
            {
                !graphic.length ?
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
                            <h2>Graphic Template</h2>
                            <Link to="/category/themetask">
                                <button className="see-more-btn">See More</button>
                            </Link>
                        </div>
                        <div className="themetask-wrapper">
                            {
                                graphic.slice(0, 8).map(theme => <ThemetaskPresentational
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

export default GraphicTemplate;