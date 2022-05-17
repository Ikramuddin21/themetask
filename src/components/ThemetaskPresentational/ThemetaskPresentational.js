import React from 'react';
import { HiDownload } from 'react-icons/hi';
import pinterestIcon from '../../images/pinterest.svg';
import './ThemetaskPresentational.css';

const ThemetaskPresentational = (props) => {
    const { preview, avatar, title,
        total_download, total_likes, username } = props.theme;
    return (
        <div className="theme-presentational">
            {/* theme image area */}
            <div className="theme-img-area">
                {/* hover & display toggle icons */}
                <div className="icons-hover">
                    <img src={pinterestIcon} alt="" />

                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                </div>

                {/* theme image */}
                <img src={`https://piktask.com/media_images/images/${preview}`} alt="" />
            </div>

            {/* theme text area */}
            <div className="theme-text-area">
                {/* theme title */}
                <p className="title"><small>{title.split(" ").splice(0, 5).join(" ")}...</small></p>
                {/* theme information */}
                <div className="info">
                    <div className="profile">
                        <img src={`https://piktask.com/media_images/${avatar}`} alt="" />
                        <span>{username}</span>
                    </div>

                    <div className="score">
                        <p>
                            <span><HiDownload /></span>
                            <span className="download-count">{total_download}</span>
                        </p>
                        <p>
                            <span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                            </span>
                            <span className="like-count">{total_likes}</span>
                        </p>
                    </div>
                    
                    <button className="download-btn">Download</button>
                </div>
            </div>
        </div>
    );
};

export default ThemetaskPresentational;