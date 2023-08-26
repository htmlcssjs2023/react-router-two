import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h1>This is friends details </h1>
            <p><strong>Name : </strong>{friend.name}</p>
            <p><strong>Email : </strong>{friend.email}</p>
            <p><strong>Street : </strong>{friend.address.street}</p>
            <p><strong>City : </strong>{friend.address.city}</p>
            
        </div>
    );
};

export default FriendsDetails;