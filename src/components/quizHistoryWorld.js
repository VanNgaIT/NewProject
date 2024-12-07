import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Ai là người sáng lập ra Đế chế La Mã?",
        options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        answer: "Augustus",
    },
    {
        id: 2,
        question: "Cuộc Cách mạng Pháp diễn ra vào năm nào?",
        options: ["1776", "1789", "1799", "1812"],
        answer: "1789",
    },
    {
        id: 3,
        question: "Ai là người phát minh ra bóng đèn điện?",
        options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
        answer: "Thomas Edison",
    },
    {
        id: 4,
        question: "Ai là người chỉ huy quân đội trong trận chiến Waterloo năm 1815?",
        options: ["Napoleon Bonaparte", "Wellington", "Horatio Nelson", "George Washington"],
        answer: "Napoleon Bonaparte",
    },
    {
        id: 5,
        question: "Thế chiến thứ hai kết thúc vào năm nào?",
        options: ["1939", "1942", "1945", "1950"],
        answer: "1945",
    },
    {
        id: 6,
        question: "Ai là người phát minh ra lý thuyết về tương đối?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        answer: "Albert Einstein",
    },
    {
        id: 7,
        question: "Ai là người sáng lập ra Đế chế Mông Cổ?",
        options: ["Kublai Khan", "Timur", "Genghis Khan", "Alexander the Great"],
        answer: "Genghis Khan",
    },
    {
        id: 8,
        question: "Cuộc Cách mạng Công nghiệp bắt đầu tại quốc gia nào?",
        options: ["Pháp", "Anh", "Mỹ", "Đức"],
        answer: "Anh",
    },
    {
        id: 9,
        question: "Ai là người lãnh đạo Đảng Cộng sản Liên Xô trong cuộc Cách mạng tháng Mười năm 1917?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
        answer: "Vladimir Lenin",
    },
    {
        id: 10,
        question: "Cách mạng Mỹ (1775–1783) chống lại đế quốc nào?",
        options: ["Tây Ban Nha", "Pháp", "Anh", "Bồ Đào Nha"],
        answer: "Anh",
    },
];

const HistoryWQuiz = () => {
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
                <h1 className="quiz-main-title">Trắc Nghiệm Lịch Sử Thế Giới</h1>
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

export default HistoryWQuiz;
