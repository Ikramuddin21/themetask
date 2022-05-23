import React, { useEffect, useState } from 'react';
import PopularSearch from '../PopularSearch/PopularSearch';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const AllSocialMediaBanner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/28?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setBanner(data.category_image))
    }, []);

    return (
        <>
            <div className="themetask">
                <div className="themetask-top-area">
                    <h2>{banner.length} Resources</h2>
                </div>
                <div className="themetask-wrapper">
                    {
                        banner.map(theme => <ThemetaskPresentational
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

export default AllSocialMediaBanner;