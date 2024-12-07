import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendNotification = () => {
    const [friendRequests, setFriendRequests] = useState([]);

    useEffect(() => {
        const fetchFriendRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5000/friend-requests');
                setFriendRequests(response.data);
            } catch (error) {
                console.error('Error fetching friend requests:', error);
            }
        };

        fetchFriendRequests();
    }, []);

    const handleResponse = async (requestId, status) => {
        try {
            await axios.patch(`http://localhost:5000/friend-request/${requestId}`, { status });
            setFriendRequests(prev => prev.filter(req => req.id !== requestId));
        } catch (error) {
            console.error('Error updating friend request:', error);
        }
    };

    return (
        <div>
            <h3>Lời mời kết bạn</h3>
            <ul>
                {friendRequests.map(req => (
                    <li key={req.id}>
                        {req.from_user.name} ({req.from_user.email})
                        <button onClick={() => handleResponse(req.id, 'accepted')}>Đồng ý</button>
                        <button onClick={() => handleResponse(req.id, 'declined')}>Từ chối</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendNotification;
