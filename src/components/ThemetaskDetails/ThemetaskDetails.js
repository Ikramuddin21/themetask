import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import copy from '../../images/copy.svg';
import share from '../../images/share.svg';
import pinterest from '../../images/pinterest.svg';
import './ThemetaskDetails.css';

const ThemetaskDetails = () => {
    const { image_id } = useParams();
    const [themeDetails, setThemeDetails] = useState([]);

    useEffect(() => {
        const url = `https://piktask.com/api/images/${image_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setThemeDetails(data);
            })
    }, [image_id]);

    // const { preview, title, creation_ago, id, createdAt, extension } = themeDetails?.detail;
    return (
        <div className="theme-details">
            <div className="theme-details-left">
                <img src={`https://piktask.com/media_images/images/${themeDetails?.detail?.preview}`} alt={themeDetails?.detail?.title} />
            </div>

            <div className="theme-details-right">
                <h2 className="theme-details-title">{themeDetails?.detail?.title}</h2>
                <div className="copy-share-area">
                    <span>{themeDetails?.detail?.creation_ago}</span>
                    <button className="theme-details-share">
                        <img src={share} alt="Share icon" /> 
                        <span>Share</span>
                    </button>
                    <button className="theme-details-copy">
                        <img src={copy} alt="Copy icon" />
                        <span>Copy Link</span>
                    </button>
                    <button className="theme-details-pinterest">
                        <img src={pinterest} alt="Pinterest icon" />
                        <span>Save</span>
                    </button>
                </div>

                <div className="d-flex">
                    <div>
                        <p><strong>Image ID: </strong>{themeDetails?.detail?.id}</p>
                        <p><strong>File Format: </strong>{themeDetails?.detail?.extension}</p>
                        <p>
                            <strong>Copyright Information: </strong>
                            <span>Piktask</span>
                        </p>
                    </div>

                    <div>
                        <p><strong>Created: </strong>{themeDetails?.detail?.createdAt}</p>
                        <p><strong>Category: </strong>{themeDetails?.detail?.category?.name}</p>
                        <p>
                            <strong>Scope of authorization: </strong>
                            <span>Personal/Enterprise</span>
                        </p>
                    </div>
                </div>

                <div className="user-info">
                    <img src={`https://piktask.com/media_images/${themeDetails?.detail?.user?.avatar}`} alt="" />
                    <div>
                        <span>{themeDetails?.detail?.user?.username}</span>
                        <span>{themeDetails?.detail?.user?.total_resources} Resources</span>
                    </div>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
};

export default ThemetaskDetails;