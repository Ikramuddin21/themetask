import React, { useEffect, useState } from 'react';
import ThemetaskPresentational from '../ThemetaskPresentational/ThemetaskPresentational';

const TextEffect = () => {
    const [textEffect, setTextEffect] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/48?limit=32&page=1&user_id=216")
            .then(res => res.json())
            .then(data => setTextEffect(data.category_image))
    }, []);

    return (
        <div className="themetask">
            <h2 className="themetask-heading">{textEffect.length} Resources</h2>
            <div className="themetask-wrapper">
                {
                    textEffect.map(theme => <ThemetaskPresentational
                        key={theme.image_id}
                        theme={theme}
                    />)
                }
            </div>
        </div>
    );
};

export default TextEffect;