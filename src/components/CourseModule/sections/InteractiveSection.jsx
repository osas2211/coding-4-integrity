"use client";

import { useState } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Sections.css";

export default function InteractiveSection({ data }) {
  const { number, title, content } = data;
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setShowFeedback(true);
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const getChoiceFeedback = () => {
    if (!showFeedback || !selectedOption) return null;
    const choice = content.choices?.find(c => c.id === selectedOption);
    return choice;
  };

  return (
    <section className="course-section interactive-section">
      <div className="section-header">
        <div className="section-number">{number}</div>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="section-content">
        {content.description && (
          <p className="intro-text">{content.description}</p>
        )}

        {content.introduction && (
          <p className="intro-text">{content.introduction}</p>
        )}

        {/* Scenario-based Activity */}
        {content.scenario && (
          <div className="activity-scenario">
            <h3 className="scenario-title">{content.scenario.title}</h3>

            {content.scenario.setup && (
              <p className="scenario-text">{content.scenario.setup}</p>
            )}

            {content.scenario.story && (
              <div className="story-box">
                {content.scenario.story.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {content.scenario.problem && (
              <div className="problem-box">
                <AlertCircle size={20} />
                <p>{content.scenario.problem}</p>
              </div>
            )}

            {content.scenario.question && (
              <div className="question-box">
                <p className="question-text">{content.scenario.question}</p>
              </div>
            )}

            {content.scenario.challenge && (
              <div className="challenge-box">
                <p>{content.scenario.challenge}</p>
              </div>
            )}
          </div>
        )}

        {/* Interactive Choice */}
        {content.interactiveChoice && (
          <div className="choice-activity">
            <h4 className="choice-prompt">{content.interactiveChoice.prompt}</h4>
            <div className="choice-options">
              {content.interactiveChoice.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`choice-btn ${selectedOption === option.id ? 'selected' : ''} ${showFeedback && option.correct ? 'correct' : ''}`}
                >
                  <div className="choice-header">
                    <span className="choice-label">{option.label}</span>
                    {showFeedback && option.correct && <CheckCircle size={20} />}
                  </div>
                  <p className="choice-description">{option.distribution}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Choice-based Activity */}
        {content.choices && (
          <div className="choices-activity">
            <div className="choices-grid">
              {content.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => handleOptionSelect(choice.id)}
                  className={`choice-card ${selectedOption === choice.id ? 'selected' : ''} ${showFeedback && choice.correct ? 'correct' : showFeedback && !choice.correct ? 'incorrect' : ''}`}
                >
                  <div className="choice-badge">Choice {choice.id}</div>
                  <h4 className="choice-title">{choice.label}</h4>
                  <p className="choice-outcome">{choice.outcome}</p>
                  {showFeedback && selectedOption === choice.id && (
                    <div className={`choice-indicator ${choice.correct ? 'correct' : 'needs-improvement'}`}>
                      {choice.correct ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && getChoiceFeedback() && (
          <div className={`feedback-box ${getChoiceFeedback().correct ? 'success' : 'info'}`}>
            <div className="feedback-icon">
              {getChoiceFeedback().correct ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
            </div>
            <div className="feedback-content">
              <h4>{getChoiceFeedback().correct ? 'Excellent Choice!' : 'Let\'s Think About This'}</h4>
              <p>{getChoiceFeedback().feedback}</p>
            </div>
          </div>
        )}

        {/* Explanation */}
        {content.explanation && (
          <div className="explanation-section">
            <h3 className="explanation-title">{content.explanation.title}</h3>
            {content.explanation.points.map((point, index) => (
              <div key={index} className="explanation-card">
                <h4>{point.heading}</h4>
                <p>{point.text}</p>
                {point.subPoints && (
                  <ul>
                    {point.subPoints.map((subPoint, idx) => (
                      <li key={idx}>{subPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Quiz */}
        {content.quiz && (
          <div className="quiz-section">
            <h3 className="quiz-title">Check Your Understanding</h3>
            {content.quiz.map((question, qIndex) => (
              <div key={question.id} className="quiz-question">
                <p className="question-text"><strong>Question {qIndex + 1}:</strong> {question.question}</p>
                <div className="quiz-options">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="quiz-option">
                      <input
                        type="radio"
                        name={question.id}
                        checked={quizAnswers[question.id] === oIndex}
                        onChange={() => handleQuizAnswer(question.id, oIndex)}
                      />
                      <span>{option}</span>
                      {showQuizResults && (
                        oIndex === question.correctAnswer ?
                        <CheckCircle size={18} className="correct-mark" /> :
                        quizAnswers[question.id] === oIndex && <XCircle size={18} className="incorrect-mark" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {!showQuizResults && Object.keys(quizAnswers).length === content.quiz.length && (
              <Button onClick={submitQuiz} className="submit-quiz-btn">
                Submit Answers
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
