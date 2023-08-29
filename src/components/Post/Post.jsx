import React from 'react';
import './post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
   
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/posts/${id}`)
    }
    const {title, body, id} = post;
    return (
        <div className='post'>
            <p><strong>Title :</strong>{title}</p>
            <p><strong>User ID : </strong>{id}</p>
            <p> <Link to={`/posts/${id}`}><strong>Post Details</strong></Link></p>
            <p><button onClick={handleNavigate}>Post Details usng Handler</button></p>
           
        </div>
    );
};

export default Post;