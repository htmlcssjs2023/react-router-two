import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div className='post'>
            <p><strong>Title :</strong>{title}</p>
            <p><strong>User ID : </strong>{id}</p>
            <p> <Link to={`/posts/${id}`}><strong>Post Details</strong></Link></p>
        </div>
    );
};

export default Post;