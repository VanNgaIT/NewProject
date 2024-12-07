import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import '../styles/friend.css';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [invitedUsers, setInvitedUsers] = useState([]); // Danh sách người dùng đã được mời

    useEffect(() => {
        const fetchFriends = async () => {

            const userId = localStorage.getItem('userId'); // Lấy userId từ localStorage
            if (!userId) {
                console.error('User not logged in');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:5000/friends/${userId}`, {
                    withCredentials: true
                });

                setFriends(response.data);
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
        };

        fetchFriends();
    }, []);

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }
        const filteredUsers = friends.filter(friend =>
            friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            friend.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredUsers);
    };

    const handleInvite = (friendId) => {
        setInvitedUsers((prev) =>
            prev.includes(friendId) ? prev.filter(id => id !== friendId) : [...prev, friendId]
        );
    };

    return (
        <>
            <Header />
            <div className="friend-list-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm bạn bè..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Tìm kiếm</button>

                <h3>Danh sách bạn bè</h3>
                <ul className="friend-list">
                    {(searchResults.length > 0 ? searchResults : friends).map((friend) => (
                        <li key={friend.id} className="friend-item">
                            <div className="friend-avatar">
                                <img src={friend.image} alt={friend.name} />
                            </div>
                            <div className="friend-details">
                                <span className="friend-name">{friend.name}</span>
                                <span className="friend-email">({friend.email})</span>
                            </div>
                            <button
                                onClick={() => handleInvite(friend.id)}
                                className={`friend-request-btn ${invitedUsers.includes(friend.id) ? 'invited' : ''}`}
                            >
                                {invitedUsers.includes(friend.id) ? 'Hủy lời mời' : 'Kết bạn'}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FriendsList;
