import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../../skeleton/SkeletonCard';
import PopularSearch from '../Shared/PopularSearch/PopularSearch';
import ThemetaskPresentational from '../Shared/ThemetaskPresentational/ThemetaskPresentational';

const BusinessCardMockup = () => {
    const [businessMockup, setBusinessMockup] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/businesscard")
            .then(res => res.json())
            .then(data => setBusinessMockup(data))
    }, []);

    return (
        <>
            {
                !businessMockup.length ?
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
                            <h2 className="themetask-heading">{businessMockup.length} Resources</h2>
                        </div>
                        <div className="themetask-wrapper">
                            {
                                businessMockup.map(theme => <ThemetaskPresentational
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

export default BusinessCardMockup;