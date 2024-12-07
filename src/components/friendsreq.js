import React from 'react';
import '../styles/friend.css'; // Nếu cần sử dụng chung CSS

const FriendRequests = ({ invitedUsers, users, onCancelInvite }) => {
    // Lọc danh sách người dùng dựa trên `invitedUsers`
    const invitedFriends = users.filter(user => invitedUsers.includes(user.id));

    return (
        <div className="friend-requests-container">
            <h3>Danh sách đã gửi lời mời</h3>
            {invitedFriends.length > 0 ? (
                <ul className="friend-requests-list">
                    {invitedFriends.map(user => (
                        <li key={user.id} className="friend-request-item">
                            <div className="friend-avatar">
                                <img src={user.image} alt={user.name} />
                            </div>
                            <div className="friend-details">
                                <span className="friend-name">{user.name}</span>
                                <span className="friend-email">({user.email})</span>
                            </div>
                            <button onClick={() => onCancelInvite(user.id)} className="cancel-invite-btn">Hủy lời mời</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Chưa có lời mời nào được gửi.</p>
            )}
        </div>
    );
};

export default FriendRequests;
