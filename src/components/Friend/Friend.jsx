import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, phone, username} = friend;
    return (
        <div>
            
            <div className="friend">
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{username}</p>
                <p><Link to={`/friends/${id}`}>Friends Details</Link></p>
            </div>

        </div>
    );
};

export default Friend;