import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Tác giả của tác phẩm 'Truyện Kiều' là ai?",
        options: ["Nguyễn Du", "Hồ Chí Minh", "Tố Hữu", "Nguyễn Trãi"],
        answer: "Nguyễn Du",
    },
    {
        id: 2,
        question: "Tác phẩm 'Lão Hạc' của tác giả nào?",
        options: ["Nam Cao", "Tô Hoài", "Xuân Diệu", "Nguyễn Minh Châu"],
        answer: "Nam Cao",
    },
    {
        id: 3,
        question: "Ai là tác giả của bài thơ 'Tỏ lòng'?",
        options: ["Hồ Chí Minh", "Phan Bội Châu", "Nguyễn Du", "Nguyễn Trãi"],
        answer: "CPhan Bội Châu",
    },
    {
        id: 4,
        question: "Trong 'Chí Phèo', nhân vật nào là biểu tượng của con người bị tha hóa trong xã hội cũ?",
        options: ["Thị Nở", "Chí Phèo", "Bá Kiến", "Lão Hạc"],
        answer: "Chí Phèo",
    },
    {
        id: 5,
        question: "Tác phẩm 'Cảnh ngày xuân' được viết bởi ai?",
        options: ["Nguyễn Du", "Nguyễn Trãi", "Hồ Chí Minh", "Phan Bội Châu"],
        answer: "Nguyễn Du",
    },
    {
        id: 6,
        question: "Tác phẩm 'Dế Mèn Phiêu Lưu Ký' là của tác giả nào?",
        options: ["Tô Hoài", "Nam Cao", "Vũ Trọng Phụng", "Thạch Lam"],
        answer: "Tô Hoài",
    },
    {
        id: 7,
        question: "Ai là tác giả của 'Nhật ký trong tù'?",
        options: ["Tố Hữu", "Hồ Chí Minh", "Phan Bội Châu", "Nguyễn Du"],
        answer: "Hồ Chí Minh",
    },
    {
        id: 8,
        question: "Bài thơ 'Đồng chí' của tác giả nào?",
        options: ["Tố Hữu", "Xuân Quỳnh", "Nguyễn Bính", "Nguyễn Đình Thi"],
        answer: "Tố Hữu",
    },
    {
        id: 9,
        question: "Tác phẩm 'Vợ chồng A Phủ' của tác giả nào?",
        options: ["Ngô Tất Tố", "Tô Hoài", "Tây Sơn", "Đỗ Chu"],
        answer: "Tô Hoài",
    },
    {
        id: 10,
        question: "Ai là tác giả của tác phẩm 'Lục Vân Tiên'?",
        options: ["Nguyễn Du", "Nguyễn Trãi", "Nguyễn Đình Chiểu", "Nguyễn Bính"],
        answer: "Nguyễn Đình Chiểu",
    },
];

const LiteratureQuiz = () => {
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

export default LiteratureQuiz;
