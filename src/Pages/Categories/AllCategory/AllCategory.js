import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCategory.css';

const AllCategory = (props) => {

    const navigate = useNavigate();

    const {thumbnail, name} = props.category;

    // handle category
    const handleCategory = () => {
        navigate(`/category/${name.toLowerCase()}`);
    };

    return (
        <div className="allCategory" onClick={handleCategory}>
            <div className="allCategory-img-area">
                <img src={thumbnail} alt="" />
            </div>

            <div className="allCategory-text-area">
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default AllCategory;