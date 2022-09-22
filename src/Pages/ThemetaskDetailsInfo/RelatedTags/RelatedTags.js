import React from 'react';
import { popularSearch } from '../../../temp/info';
import './RelatedTags.css';

const RelatedTags = () => {
    return (
        <div className="tags">
            <h2>Related tags</h2>
            {
                popularSearch?.map((tag, index) => tag.length > 0 &&  <button key={index}>
                    {tag}
                </button>)
            }
        </div>
    );
};

export default RelatedTags;