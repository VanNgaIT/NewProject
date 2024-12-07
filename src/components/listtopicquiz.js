import React from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import '../styles/topic.css'

const ListTopic = () => {
    const navigate = useNavigate();
    const topics = ['Công nghệ thông tin', 'Vũ trụ', 'Lịch sử đất nước', 'Lịch sử thế giới', 'Địa lý', 'Toán học', 'Văn học'];

    const handleTopicSelect = (topic) => {
        switch (topic) {
            case "Công nghệ thông tin":
                navigate("/quizit");
                break;
            case "Vũ trụ":
                navigate("/quizuniverse");
                break;
            case "Lịch sử đất nước":
                navigate("/quizhistoryvn");
                break;
            case "Địa lý":
                navigate("/quizgeo");
                break;
            case "Lịch sử thế giới":
                navigate("/quizhistory");
                break;
            case "Toán học":
                navigate("/quizmath");
                break;
            case "Văn Học":
                navigate("/quizlit");
                break;
            // Thêm các case cho các chủ đề khác
            default:
                break;
        }
    };
    return (
        <>
            <Header />
            <div className="list-topic">
                <h2 className="list-topic-title">Trò Chơi Trắc Nghiệm</h2>
                <ul className="list-topic-items">
                    {topics.map((topic, index) => (
                        <li key={index}>
                            <button
                                className="list-topic-button"
                                onClick={() => handleTopicSelect(topic)}
                            >
                                {topic}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ListTopic;
