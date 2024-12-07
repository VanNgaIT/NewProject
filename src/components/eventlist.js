import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/event.css'
import Header from './header';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    // Lấy danh sách sự kiện từ API
    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi tải sự kiện:', error);
            });
    }, []);

    const goToEvent = () => {
        navigate('/event'); // Điều hướng đến trang sự kiện
    };

    // Điều hướng đến trang chi tiết sự kiện
    const goToEventDetails = (eventId) => {
        navigate(`/events/${eventId}`);
    };

    return (
        <>
            <Header />
            <div className="event-list-container">
                <h2>Danh sách sự kiện</h2>
                <button onClick={goToEvent} className="create-event-btn">
                    Tạo sự kiện mới
                </button>
                <ul className="event-list">
                    {events.map(event => (
                        <li key={event.id} className="event-item" onClick={() => goToEventDetails(event.id)}>
                            <h3>{event.title}</h3>
                            <p>{event.date} - {event.time}</p>
                            <p>Địa điểm: {event.location}</p>
                            <button>Xem chi tiết</button>
                            {/* Nút tạo sự kiện */}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventList;
