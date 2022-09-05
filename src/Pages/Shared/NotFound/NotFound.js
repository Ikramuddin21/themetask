import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h1>404</h1>
                <p>That page was not found!!!</p>
                <Link to="/">
                    <button>Go back home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;