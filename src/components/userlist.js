import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/friend.css'; // Để áp dụng CSS từ file này
import Header from './header';
import FriendRequests from './friendsreq';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [invitedUsers, setInvitedUsers] = useState([]);



    // Hàm gửi yêu cầu kết bạn
    const sendFriendRequest = async (userId) => {
        try {
            await axios.post('http://localhost:5000/friend-request', { userId });
            console.log(`Yêu cầu kết bạn đã gửi đến ${userId}`);
        } catch (error) {
            console.error('Lỗi gửi yêu cầu kết bạn:', error);
        }
    };

    // Hàm xử lý mời/hủy mời kết bạn
    const handleInvite = async (userId) => {
        if (!invitedUsers.includes(userId)) {
            setInvitedUsers([...invitedUsers, userId]);
            await sendFriendRequest(userId);
        } else {
            setInvitedUsers(invitedUsers.filter(id => id !== userId));
        }
    };

    // Hàm hủy lời mời
    const cancelInvite = (userId) => {
        setInvitedUsers(invitedUsers.filter(id => id !== userId));
    };

    // Lấy danh sách người dùng từ API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    // Hàm tìm kiếm người dùng
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredUsers);
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

                <h3>Danh sách người dùng</h3>
                <ul className="friend-list">
                    {(searchResults.length > 0 ? searchResults : users).map((user) => (
                        <li key={user.id} className="friend-item">
                            <div className="friend-avatar">
                                <img src={user.image} alt={user.name} />
                            </div>
                            <div className="friend-details">
                                <span className="friend-name">{user.name}</span>
                                <span className="friend-email">({user.email})</span>
                            </div>
                            <button onClick={() => handleInvite(user.id)}
                                className={`friend-request-btn ${invitedUsers.includes(user.id) ? 'invited' : ''}`}>
                                {invitedUsers.includes(user.id) ? 'Hủy lời mời' : 'Kết bạn'}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Thêm component hiển thị lời mời */}
                <FriendRequests
                    invitedUsers={invitedUsers}
                    users={users}
                    onCancelInvite={cancelInvite}
                />
            </div>
        </>
    );
};

export default UserList;
