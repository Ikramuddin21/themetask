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
import Skeleton from 'react-loading-skeleton';

const ThemetaskDetails = () => {
    const {category, image_id} = useParams();
    const [themeDetails, setThemeDetails] = useState({});

    useEffect(() => {
        const url = `https://themetask-server.onrender.com/theme-detail/${category}/${image_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setThemeDetails(data);
            })
    }, [category, image_id]);
    return (
        <>
        {/* theme details */}
        {
            !themeDetails.preview ?
        <div className="theme-details">
            <div className="theme-details-left">
              <Skeleton width="720px" height="520px" />
            </div>

            <div className="theme-details-right">
                <h2 className="theme-details-title"><Skeleton /></h2>
                <div className="copy-share-area">
                    <Skeleton />
                </div>

                <div className="theme-details-info">
                   <Skeleton width="300px" height="12px" />
                </div>

                <div className="user-info">
                   <Skeleton width="300px" height="12px" />
                </div>

                <div className="theme-details-media">
                  <Skeleton width="300px" height="12px" />
                </div>

                <div className="download-like-btn">
                 <Skeleton width="300px" height="12px" />
                </div>
            </div>
        </div>
        :
        <div className="theme-details">
            <div className="theme-details-left">
                <img src={themeDetails?.preview} alt="" />
            </div>

            <div className="theme-details-right">
                <h2 className="theme-details-title">{themeDetails?.title}</h2>
                <div className="copy-share-area">
                    <span>01-October-2022</span>
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
                        <p><strong>Image ID : </strong>{themeDetails?._id}</p>
                        <p><strong>File Format : </strong>{themeDetails?.extension}</p>
                        <p className="copyright-info">
                            <strong>Copyright Information : </strong>
                            <span>Themetask</span>
                        </p>
                    </div>

                    <div className="theme-details-info-right">
                        <p><strong>Created : </strong>Ikram Uddin</p>
                        <p><strong>Category : </strong>{themeDetails?.category}</p>
                        <p className="authorization-info">
                            <strong>Scope of authorization : </strong>
                            <span>Personal/Enterprise</span>
                        </p>
                    </div>
                </div>

                <div className="user-info">
                    <img src="https://i.ibb.co/JyYQGM4/preview.png" alt="" />
                    <div className="user-info-name">
                        <span className="username-highlight">Themetask</span>
                        <span>10 Resources</span>
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
        }

        {/* related products components */}
        <RelatedProducts category={category} />

        {/* related tags */}
        <RelatedTags />
        </>
    );
};

export default ThemetaskDetails;