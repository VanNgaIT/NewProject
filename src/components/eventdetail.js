import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/evendetail.css'
import Header from './header';

const EventDetails = () => {
    const { id } = useParams(); // Lấy eventId từ URL
    const [event, setEvent] = useState(null);

    // Lấy thông tin chi tiết sự kiện từ API
    useEffect(() => {
        if (id) { // Kiểm tra xem id có phải là giá trị hợp lệ không
            axios.get(`http://localhost:5000/events/${id}`) // Sử dụng id trong URL
                .then(response => {
                    setEvent(response.data);
                })
                .catch(error => {
                    console.error('Lỗi khi tải chi tiết sự kiện:', error);
                });
        }
    }, [id]);

    if (!event) return <p>Đang tải sự kiện...</p>;

    return (
        <>
            <Header />
            <div className="event-details-container">
                <h2>{event.title}</h2>
                <p><strong>Ngày:</strong> {event.date}</p>
                <p><strong>Thời gian:</strong> {event.time}</p>
                <p><strong>Địa điểm:</strong> {event.location}</p>
                <p><strong>Danh sách bạn bè mời:</strong></p>
                <ul>
                    {event.invitedFriends.map(friendId => (
                        <li key={friendId}>Bạn {friendId}</li> // Lấy tên bạn có thể cần API hoặc dữ liệu khác để hiển thị
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventDetails;
