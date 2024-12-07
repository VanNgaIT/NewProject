import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Hành tinh nào lớn nhất trong Hệ Mặt Trời?",
        options: ["Trái Đất", "Sao Mộc", "Sao Kim", "Sao Thổ"],
        answer: "Sao Mộc",
    },
    {
        id: 2,
        question: "Vũ trụ có bao nhiêu hành tinh chính trong Hệ Mặt Trời?",
        options: ["7", "8", "9", "10"],
        answer: "8",
    },
    {
        id: 3,
        question: "Tại sao Mặt Trời có màu vàng?",
        options: [
            "Vì nó là một ngôi sao màu vàng",
            "Ánh sáng từ Mặt Trời bị phân tán khi đi qua khí quyển",
            "Do sự phản xạ ánh sáng từ các hành tinh",
            "Vì Mặt Trời thực sự có màu đỏ"],
        answer: "Ánh sáng từ Mặt Trời bị phân tán khi đi qua khí quyển",
    },
    {
        id: 4,
        question: "Đâu là hành tinh gần Mặt Trời nhất?",
        options: ["Trái Đất", "Sao Kim", "Sao Hỏa", "Sao Thủy"],
        answer: "Sao Thủy",
    },
    {
        id: 5,
        question: "Vũ trụ bắt đầu từ sự kiện nào?",
        options: ["Big Bang", "Sự nổ của một ngôi sao", "Hình thành hành tinh", "Mặt Trời ra đời"],
        answer: "Big Bang",
    },
    {
        id: 6,
        question: "Mặt Trăng có bao nhiêu lần bằng kích thước Trái Đất?",
        options: ["Bằng 1/4", "Bằng 1/2", "Bằng 1/8", "bằng 1/12"],
        answer: "Bằng 1/4",
    },
    {
        id: 7,
        question: "Hành tinh nào có vòng sáng lớn nhất trong Hệ Mặt Trời?",
        options: ["Sao Hỏa", "Sao Thổ", "Sao Kim", "Sao Mộc"],
        answer: "Sao Thổ",
    },
    {
        id: 8,
        question: "Chúng ta không thể sống trên sao Hỏa vì sao?",
        options: ["Vì sao Hỏa không có nước", "Vì không có oxy", "Vì sao Hỏa quá lạnh", "Tất cả các đáp án trên"],
        answer: "Tất cả các đáp án trên",
    },
    {
        id: 9,
        question: "Lực hấp dẫn của Mặt Trăng so với Trái Đất là bao nhiêu?",
        options: ["Bằng 1/6", " Bằng 1/3", "Bằng 1/2", "Bằng với Trái Đất"],
        answer: "Bằng 1/6",
    },
    {
        id: 10,
        question: "Tính toán khoảng cách từ Trái Đất đến Mặt Trời là bao nhiêu?",
        options: ["93 triệu km", "100 triệu km", "120 triệu km", "150 triệu km"],
        answer: "93 triệu km",
    },
];

const UniverseQuiz = () => {
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
                <h1 className="quiz-main-title">Trắc Nghiệm Kiến Thức Vũ Trụ</h1>
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

export default UniverseQuiz;
