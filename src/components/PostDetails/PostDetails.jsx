import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const details = useLoaderData();
    return (
        <div className='post-details'>
            <p>
                {details.body}
            </p>
        </div>
    );
};

export default PostDetails;