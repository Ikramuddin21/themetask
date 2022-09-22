import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
    return (
        <div className="theme-presentational">
            <div className="theme-img-area">
                <Skeleton width="326px" height="233px" />
            </div>
            <div className="theme-text-area">
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    );
};

export default SkeletonCard;