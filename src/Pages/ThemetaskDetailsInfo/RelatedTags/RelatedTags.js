import React from 'react';
import './RelatedTags.css';

const RelatedTags = ({themeDetails}) => {
    return (
        <div className="tags">
            <h2>Related tags</h2>
            {
                themeDetails?.map((tag, index) => tag.length > 0 &&  <button key={index}>
                    {tag}
                </button>)
            }
        </div>
    );
};

export default RelatedTags;