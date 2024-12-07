import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Thiết bị nào sau đây dùng để kết nối mạng?",
        options: ["RAM", "ROM", "Router", "CPU"],
        answer: "Router",
    },
    {
        id: 2,
        question: "Ngôn ngữ lập trình nào thường được sử dụng để phát triển ứng dụng web phía máy chủ?",
        options: ["HTML", "Python", "CSS", "SQL"],
        answer: "Python",
    },
    {
        id: 3,
        question: "Trong lập trình, vòng lặp for được sử dụng để làm gì?",
        options: ["Chạy một đoạn mã nhiều lần", "Chạy đoạn mã khi điều kiện đúng", "Nhập dữ liệu từ người dùng", "Tạo biến"],
        answer: "Chạy một đoạn mã nhiều lần",
    },
    {
        id: 4,
        question: "SQL dùng để làm gì?",
        options: ["Thiết kế giao diện người dùng", "Lập trình game", "Quản lý cơ sở dữ liệu", "Tạo API"],
        answer: "Quản lý cơ sở dữ liệu",
    },
    {
        id: 5,
        question: "Trong HTML, thẻ nào dùng để tạo đường liên kết?",
        options: ["<p>", "<a>", "<div>", "<link>"],
        answer: "<a>",
    },
    {
        id: 6,
        question: "Từ khóa nào trong Java được dùng để tạo một đối tượng?",
        options: ["new", "class", "object", "create"],
        answer: "new",
    },
    {
        id: 7,
        question: "Git là gì?",
        options: ["Một ngôn ngữ lập trình", "Một công cụ quản lý mã nguồn", "Một IDE", "Một trình duyệt web"],
        answer: "Một công cụ quản lý mã nguồn",
    },
    {
        id: 8,
        question: "Python có kiểu dữ liệu nào sau đây?",
        options: ["String", "List", "Dictionary", "Tất cả các đáp án trên"],
        answer: "Tất cả các đáp án trên",
    },
    {
        id: 9,
        question: "Trong CSS, thuộc tính nào dùng để thay đổi màu nền?",
        options: ["background-color", "color", "font-color", "border-color"],
        answer: "background-color",
    },
    {
        id: 10,
        question: "Trong React, Hook nào dùng để quản lý trạng thái?",
        options: ["useState", "useEffect", "useReducer", "useContext"],
        answer: "useState",
    },
];

const MiniGameQuiz = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        const currentQuestion = quizData[currentQuestionIndex];

        if (selectedOption === currentQuestion.answer) {
            setScore((prevScore) => prevScore + 1);
        }

        const nextIndex = currentQuestionIndex + 1;

        if (nextIndex < quizData.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleChooseOtherTopic = () => {
        navigate('/topic');
    }

    return (
        <>
            <Header />
            <div className="mini-game-wrapper">
                <h1 className="quiz-main-title">Trắc nghiệm công nghệ thông tin</h1>
                {!isQuizFinished ? (
                    <div className="quiz-container">
                        <h2 className="quiz-title">
                            Question {currentQuestionIndex + 1}/{quizData.length}
                        </h2>
                        <p className="quiz-question">{quizData[currentQuestionIndex].question}</p>
                        <div className="quiz-options">
                            {quizData[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    className="quiz-option"
                                    onClick={() => handleAnswerClick(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="quiz-result">
                        <h2 className="quiz-finished-title">Quiz Finished!</h2>
                        <p className="quiz-score">Your Score: {score}/{quizData.length}</p>
                        <button className="btn-finish"
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setIsQuizFinished(false);
                            }}
                        >
                            Restart Quiz
                        </button>
                        <button onClick={handleChooseOtherTopic} className="btn-finish">
                            Chủ đề khác
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default MiniGameQuiz;
