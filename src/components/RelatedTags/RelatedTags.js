import React from 'react';
import './RelatedTags.css';

const RelatedTags = ({themeDetails}) => {
    return (
        <div className="related-tags">
            <h2>Related tags</h2>
            {
                themeDetails?.map((tag, index) => <button key={index}>
                    {tag}
                </button>)
            }
        </div>
    );
};

export default RelatedTags;