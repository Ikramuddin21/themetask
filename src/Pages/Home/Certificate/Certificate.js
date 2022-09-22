import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import SkeletonCard from '../../../skeleton/SkeletonCard';
import ThemetaskPresentational from '../../Shared/ThemetaskPresentational/ThemetaskPresentational';

const Certificate = () => {

    const [certificate, setCertificate] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/certificate")
            .then(res => res.json())
            .then(data => setCertificate(data.slice(0, 8)));
    }, []);

    return (
        <>
            {
                !certificate.length ?
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
                            <h2>Certificates</h2>
                            <Link to="/category/certificate">
                                <button className="see-more-btn">See More</button>
                            </Link>
                        </div>
                        <div className="themetask-wrapper">
                            {
                                certificate.slice(0, 8).map(theme => <ThemetaskPresentational
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

export default Certificate;