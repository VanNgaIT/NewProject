import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Ai là vị vua đầu tiên của triều đại nhà Lý?",
        options: ["Lý Thái Tổ", "Lý Thánh Tông", "Lý Nhân Tông", "Lý Công Uẩn"],
        answer: "Lý Thái Tổ",
    },
    {
        id: 2,
        question: "Ai là người sáng lập ra Nhà nước Đại Việt?",
        options: ["Trần Hưng Đạo", "Lý Thái Tổ", "Ngô Quyền", "Hồ Quý Ly"],
        answer: "Ngô Quyền",
    },
    {
        id: 3,
        question: "Chiến thắng Bạch Đằng 938 là do ai chỉ huy?",
        options: ["Trần Hưng Đạo", "Lý Thái Tổ", "Ngô Quyền", "Lê Lợi"],
        answer: "Ngô Quyền",
    },
    {
        id: 4,
        question: "Cuộc khởi nghĩa nào do Mai Thúc Loan lãnh đạo vào thế kỷ 8?",
        options: ["Khởi nghĩa Hai Bà Trưng", "Khởi nghĩa Bà Triệu", "Khởi nghĩa Mai Thúc Loan", "Khởi nghĩa Lý Bí"],
        answer: "Khởi nghĩa Mai Thúc Loan",
    },
    {
        id: 5,
        question: "Năm nào xảy ra cuộc khởi nghĩa Hai Bà Trưng?",
        options: ["40", "90", "20", "120"],
        answer: "40",
    },
    {
        id: 6,
        question: "Ai là người đã đánh thắng quân Nguyên - Mông trong các trận chiến Bạch Đằng (1288)?",
        options: ["Lê Lợi", "Trần Hưng Đạo", "Ngô Quyền", "Võ Nguyên Giáp"],
        answer: "Trần Hưng Đạo",
    },
    {
        id: 7,
        question: "Cuộc khởi nghĩa nào được gọi là 'Khởi nghĩa Lam Sơn'?",
        options: ["Khởi nghĩa Bà Triệu", "Khởi nghĩa Lê Lợi", "Khởi nghĩa Mai Thúc Loan", "Khởi nghĩa Trần Hưng Đạo"],
        answer: "Khởi nghĩa Lê Lợi",
    },
    {
        id: 8,
        question: "Người sáng lập ra Nhà Mạc là ai?",
        options: ["Mạc Đăng Dung", "Mạc Thiên Tứ", "Nguyễn Trãi", "Trần Quang Khải"],
        answer: "Mạc Đăng Dung",
    },
    {
        id: 9,
        question: "Năm nào diễn ra cuộc chiến tranh giữa Việt Nam và Mỹ, dẫn đến sự kiện 30/4/1975?",
        options: ["1954", "1965", "1945", "1975"],
        answer: "1965",
    },
    {
        id: 10,
        question: "Tổ chức nào được thành lập vào năm 1945 để giải phóng dân tộc Việt Nam?",
        options: ["Việt Minh", "Đảng Cộng sản Việt Nam", "Liên Minh Dân Tộc", "Mặt trận Tổ quốc Việt Nam"],
        answer: "Việt Minh",
    },
];

const HistoryVNQuiz = () => {
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
                <h1 className="quiz-main-title">Trắc Nghiệm Lịch Sử Việt Nam</h1>
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

export default HistoryVNQuiz;
