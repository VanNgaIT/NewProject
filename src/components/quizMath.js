import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Kết quả của phép cộng 15 + 23 là gì?",
        options: ["38", "39", "28", "37"],
        answer: "38",
    },
    {
        id: 2,
        question: "Số nào là số nguyên tố nhỏ hơn 10?",
        options: ["1", "3", "4", "6"],
        answer: "3",
    },
    {
        id: 3,
        question: "Giá trị của biểu thức 15 x 6 là bao nhiêu?",
        options: ["90", "60", "120", "100"],
        answer: "90",
    },
    {
        id: 4,
        question: "Phương trình 2x = 10 có nghiệm là gì?",
        options: ["x = 2", "x = 5", "x = 10", "x = 4"],
        answer: "x = 5",
    },
    {
        id: 5,
        question: "Kết quả của phép trừ 25 - 9 là gì?",
        options: ["14", "15", "16", "17"],
        answer: "16",
    },
    {
        id: 6,
        question: "Số nào là bội của 3?",
        options: ["5", "6", "7", "8"],
        answer: "6",
    },
    {
        id: 7,
        question: "Diện tích của một hình vuông có cạnh dài 4 cm là bao nhiêu?",
        options: ["8 cm²", "12 cm²", "16 cm²", "20cm²"],
        answer: "16 cm²",
    },
    {
        id: 8,
        question: "Kết quả của phép chia 48 ÷ 8 là gì?",
        options: ["4", "6", "8", "10"],
        answer: "4",
    },
    {
        id: 9,
        question: "Số tiếp theo trong dãy số: 2, 4, 6, 8, ___ là gì?",
        options: ["9", "10", "11", "12"],
        answer: "10",
    },
    {
        id: 10,
        question: "Tổng các góc trong một tam giác là bao nhiêu độ?",
        options: ["180°", "360°", "90°", "270°"],
        answer: "180°",
    },
];

const MathQuiz = () => {
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
                <h1 className="quiz-main-title">Trắc Nghiệm Kiến Thức Toán Học</h1>
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

export default MathQuiz;
