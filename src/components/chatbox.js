import React, { useState } from "react";
import "../styles/chatbox.css";

const ChatBox = ({ onClose, receiver }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [botTyping, setBotTyping] = useState(false);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { sender: "Me", text: message }]);
            setMessage("");
            setBotTyping(true);
            setTimeout(() => {
                const autoReply = getAutoReply(message);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: "Bot", text: autoReply }
                ]);
                setBotTyping(false);
            }, 4000); // Độ trễ 3 giây
        }


    };

    const getAutoReply = (message) => {
        // Tự động trả lời dựa trên nội dung tin nhắn
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("lô") || lowerMessage.includes("chào")) {
            return "Gì vậy cưng";
        } else if (lowerMessage.includes("bạn khỏe không")) {
            return "Khỏe hay không kệ tau";
        } else if (lowerMessage.includes("giỡn mặt hả mậy")) {
            return "Đấm nhau chơi";
        } else {
            return "Sorry, I didn't quite understand that.";
        }
    };

    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <div className="chatbox-header-left">
                    <img className="avatar" src="https://www.bing.com/th?id=OIP.3NDMaKiACD9IXxMHSpnJzgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="avatar" />
                    <h3>{receiver}</h3>
                </div>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="chatbox-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === "Me" ? "sent" : "received"}`}
                    >
                        <div className="message-avatar">
                            {msg.sender === "Me" ? (
                                <img className="avatar" src="https://th.bing.com/th?id=OIP.GFWhcwr86NkiwV45Y-CjxQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="avatar" />
                            ) : (
                                <img className="avatar" src="https://www.bing.com/th?id=OIP.3NDMaKiACD9IXxMHSpnJzgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="avatar" />
                            )}
                        </div>
                        <div className={`message-bubble ${msg.sender === "Me" ? "sent-bubble" : "received-bubble"}`}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
                {/* Hiển thị Bot đang gõ */}
                {botTyping && (
                    <div className="message received">
                        <div className="message-avatar">
                            <img className="avatar" src="https://www.bing.com/th?id=OIP.3NDMaKiACD9IXxMHSpnJzgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="avatar" />
                        </div>
                        <div className="message-bubble typing-indicator">
                            <p>Đang trả lời...</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="chatbox-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={handleSendMessage}><i className="fas fa-paper-plane"></i></button>
            </div>
        </div>
    );
};

export default ChatBox;
