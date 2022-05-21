import React, { useEffect, useState } from 'react';
import PopularSearch from '../PopularSearch/PopularSearch';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const BusinessCardMockup = () => {
    const [businessMockup, setBusinessMockup] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/33?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setBusinessMockup(data.category_image))
    }, []);

    return (
        <>
            <div className="themetask">
                <h2 className="themetask-heading">{businessMockup.length} Resources</h2>
                <div className="themetask-wrapper">
                    {
                        businessMockup.map(theme => <ThemetaskPresentational
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

export default BusinessCardMockup;