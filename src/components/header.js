import React, { useState } from "react";
import "../styles/header.css";
import { useNavigate } from 'react-router-dom';
import MessagesList from "./messageslist.js";
import ChatBox from "./chatbox.js";

const Header = () => {
    const [messages] = useState([
        { id: 1, sender: "Alice", message: "Hello", avatar: "https://via.placeholder.com/40" },
        { id: 2, sender: "Bob", message: "Hi", avatar: "https://via.placeholder.com/40" },
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMessagesOpen, setIsMessagesOpen] = useState(false);
    const [chatboxReceiver, setChatboxReceiver] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMessages = () => {
        setIsMessagesOpen(!isMessagesOpen);
    };

    const goToUserList = () => {
        navigate('/userlist'); // Điều hướng đến trang bạn bè
    };

    const goToHome = () => {
        navigate('/home'); // Điều hướng đến trang bạn bè
    };

    const goToEvent = () => {
        navigate('/event'); // Điều hướng đến trang sự kiện
    };

    const goToFriendList = () => {
        navigate('/friendlist')
    }

    const goToEventList = () => {
        navigate('/eventlist'); // Điều hướng đến trang sự kiện
    };

    const goToGame = () => {
        navigate('/topic'); // Điều hướng đến trang sự kiện
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Điều hướng về trang đăng nhập
    };

    const handleMessageClick = (message) => {
        setChatboxReceiver(message.sender); // Set the receiver for ChatBox
    };

    const closeChatbox = () => {
        setChatboxReceiver(null);
    };

    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="header__logo">
                    <h1 onClick={goToHome}>FriendSpace</h1>
                </div>

                <div className="header__search">
                    <input
                        type="text"
                        placeholder="Tìm kiếm bạn bè, bài viết..."
                    />
                </div>

                <nav className="header__nav">
                    <button onClick={goToHome} className="nav__link"> <i className="fas fa-home"></i></button>
                    <button onClick={goToUserList} className="nav__link"><i className="fas fa-users"></i></button>
                    <button onClick={toggleMessages} className="nav__link"><i className="fas fa-comment-dots"></i></button>
                    <button onClick={goToEvent} className="nav__link"><i className="fas fa-bell"></i></button>
                </nav>

                <div className="header__avatar">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="avatar__image"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="avatar__dropdown">
                            <button onClick={handleLogout} className="logout-btn">Thông tin</button>
                            <button onClick={handleLogout} className="logout-btn">Đăng xuất</button>
                        </div>
                    )}
                </div>
            </header>

            {/* Hiển thị Chatbox nếu có người nhận */}
            {isMessagesOpen && (
                <MessagesList
                    messages={messages}
                    onMessageClick={handleMessageClick}
                />
            )}

            {chatboxReceiver && (
                <ChatBox receiver={chatboxReceiver} onClose={closeChatbox} />
            )}

            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li>
                        <button href="#event" onClick={goToEventList}><i className="fas fa-calendar-alt"></i>Sự kiện</button>
                    </li>
                    <li>

                        <button onClick={goToFriendList}><i className="fas fa-users"></i>Bạn bè</button>
                    </li>
                    <li>

                        <button href="#game" onClick={goToGame}><i className="fa-solid fa-gamepad"></i>Trò chơi</button>
                    </li>
                    <li>

                        <button href="#more"><i className="fas fa-ellipsis-h"></i>Xem thêm</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
