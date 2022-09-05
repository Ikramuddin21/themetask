import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiDownload } from 'react-icons/hi';
import copy from '../../../images/copy.svg';
import share from '../../../images/share.svg';
import pinterest from '../../../images/pinterest1.svg';
import likeIcon from '../../../images/likeIcon.svg';
import './ThemetaskDetails.css';
import { socialMedia } from '../../../temp/info';
import RelatedTags from '../RelatedTags/RelatedTags';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

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

    return (
        <>
        {/* theme details */}
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

                <div className="theme-details-info">
                    <div>
                        <p><strong>Image ID : </strong>{themeDetails?.detail?.id}</p>
                        <p><strong>File Format : </strong>{themeDetails?.detail?.extension}</p>
                        <p className="copyright-info">
                            <strong>Copyright Information : </strong>
                            <span>Piktask</span>
                        </p>
                    </div>

                    <div className="theme-details-info-right">
                        <p><strong>Created : </strong>{themeDetails?.detail?.createdAt}</p>
                        <p><strong>Category : </strong>{themeDetails?.detail?.category?.name}</p>
                        <p className="authorization-info">
                            <strong>Scope of authorization : </strong>
                            <span>Personal/Enterprise</span>
                        </p>
                    </div>
                </div>

                <div className="user-info">
                    <img src={`https://piktask.com/media_images/${themeDetails?.detail?.user?.avatar}`} alt="" />
                    <div className="user-info-name">
                        <span className="username-highlight">{themeDetails?.detail?.user?.username}</span>
                        <span>{themeDetails?.detail?.user?.total_resources} Resources</span>
                    </div>
                    <button className="user-info-follow">Follow</button>
                </div>

                <div className="theme-details-media">
                    <p>Follow me : </p>
                    <ul className="theme-details-media-items">
                        {
                            socialMedia.slice(0, 5).map((icon, index) => <li key={index}>
                                <Link to="https://www.google.com" target="_blank">
                                    <img src={icon} alt="" />
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="download-like-btn">
                    <button className="user-download-btn">
                        <HiDownload className="icon-download" /> Download</button>
                    <button className="user-like-btn">
                        <img src={likeIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>

        {/* related products components */}
        <RelatedProducts image_id={image_id} />

        {/* related tags */}
        <RelatedTags themeDetails={themeDetails?.related_tags} />
        </>
    );
};

export default ThemetaskDetails;