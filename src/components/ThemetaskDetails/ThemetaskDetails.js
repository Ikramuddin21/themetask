import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import copy from '../../images/copy.svg';
import share from '../../images/share.svg';
import pinterest from '../../images/pinterest.svg';

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

    const {category:{name}} = themeDetails?.detail;
    console.log(themeDetails?.detail?.category.name);

    // const { preview, title, creation_ago, id, createdAt, extension, category:{name} } = themeDetails?.detail;
    return (
        <div>
            {/* <div>
                <img src={`https://piktask.com/media_images/images/${preview}`} alt="" />
            </div>

            <div>
                <h3>{title}</h3>

                <div>
                    <span>{creation_ago}</span>
                    <button><img src={share} alt="Share icon" /> Share</button>
                    <button><img src={copy} alt="Copy icon" /> Copy Link</button>
                    <button><img src={pinterest} alt="Pinterest icon" /> Save</button>
                </div>

                <div>
                    <p><strong>Image ID: </strong>{id}</p>
                    <p><strong>Created: </strong>{createdAt}</p>
                </div>

                <div>
                    <p><strong>File Format: </strong>{extension}</p>
                    <p><strong>Category: </strong>{name}</p>
                </div>

                <div>
                    <p>
                        <strong>Copyright Information: </strong>
                        <span>Piktask</span>
                    </p>

                    <p>
                        <strong>Scope of authorization: </strong>
                        <span>Personal/Enterprise</span>
                    </p>
                </div>

                <div>
                    <img src={`https://piktask.com/media_images/${avatar}`} alt="" />
                    <div>
                        <span>{username}</span>
                        <span>{total_resources} Resources</span>
                    </div>
                    <button>Follow</button>
                </div>
            </div> */}
        </div>
    );
};

export default ThemetaskDetails;