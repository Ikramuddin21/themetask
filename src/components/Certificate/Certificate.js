import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const Certificate = () => {

    const [certificate, setCertificate] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/45?user_id=216")
            .then(res => res.json())
            .then(data => setCertificate(data.category_image));
    }, []);

    return (
        <div className="themetask">
            <div className="themetask-top-area">
                <h2>Certificates</h2>
                <Link to="/category/certificates/45">
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
    );
};

export default Certificate;