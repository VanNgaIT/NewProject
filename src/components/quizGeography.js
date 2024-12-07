import React, { useState } from 'react';
import Header from './header';
import { useNavigate } from "react-router-dom";
import '../styles/minigame.css'

const quizData = [
    {
        id: 1,
        question: "Thành phố có mật độ dân số cao nhất thế giới?",
        options: ["New York", "Tokyo", "London", "Shanghai"],
        answer: "Tokyo",
    },
    {
        id: 2,
        question: "Đồng bằng rộng lớn nhất Việt Nam là đồng bằng nào?",
        options: ["Đồng Bằng Sông Hồng", "Đồng Bằng Sông Cửu Long", "Đồng Bằng Duyên Hải Miền Trung", "Không đáp án nào đúng"],
        answer: "Đồng Bằng Sông Cửu Long",
    },
    {
        id: 3,
        question: "Quốc gia nào có diện tích lớn nhất trên thế giới?",
        options: ["Canada", "Hoa Kỳ", "Nga", "Trung Quốc"],
        answer: "Nga",
    },
    {
        id: 4,
        question: "Đại dương nào có diện tích lớn nhất thế giới?",
        options: ["Đại Tây Dương", "Thái Bình Dương", "Ấn Độ Dương", "Bắc Băng Dương"],
        answer: "Thái Bình Dương",
    },
    {
        id: 5,
        question: "Nơi nào có lượng cà phê xuất khẩu lớn nhất Việt Nam?",
        options: ["Đắk Lắk", "Lâm Đồng", "Gia Lai", "Kon Tum"],
        answer: "Đắk Lắk",
    },
    {
        id: 6,
        question: "Châu lục nào có nhiều quốc gia nhất?",
        options: ["Châu Á", "Châu Âu", "Châu Phi", "Châu Mỹ"],
        answer: "Châu Phi",
    },
    {
        id: 7,
        question: "Sa mạc nào lớn nhất thế giới?",
        options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
        answer: "Sahara",
    },
    {
        id: 8,
        question: "Núi Everest nằm ở quốc gia nào?",
        options: ["Nepal", "Pakistan", "Nhật Bản", "Mỹ"],
        answer: "Nepal",
    },
    {
        id: 9,
        question: "Đất nước nào có GPD bình quân đầu người cao nhất thế giới?",
        options: ["Luxembourg", "Trung Quốc", "Mỹ", "Đức"],
        answer: "Luxembourg",
    },
    {
        id: 10,
        question: "Đất nước nào có GPD tổng thể cao nhất thế giới?",
        options: ["Luxembourg", "Mỹ", "Trung Quốc", "Anh"],
        answer: "Mỹ",
    },
];

const GeographyQuiz = () => {
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
                <h1 className="quiz-main-title">Trắc Nghiệm Địa Lý</h1>
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

export default GeographyQuiz;
