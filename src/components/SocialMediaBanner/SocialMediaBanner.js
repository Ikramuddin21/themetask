import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const SocialMediaBanner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/28?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setBanner(data.category_image))
    }, []);

    return (
        <div className="themetask">
            <h2 className="themetask-heading">{banner.length} Resources</h2>
            <div className="themetask-wrapper">
                {
                    banner.map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default SocialMediaBanner;