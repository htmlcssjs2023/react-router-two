import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    const goPreviousSession = () => {
        navigate(-1);
    }

    return (
        <div className='post-details'>
            <p>{details.body}</p>
            <p><button onClick={goPreviousSession}>Go Back</button></p>
        </div>
    );
};

export default PostDetails; 