"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Sections.css";

export default function ReviewSection({ data }) {
  const { number, title, content } = data;
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    if (!content.finalQuiz) return 0;
    let correct = 0;
    content.finalQuiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / content.finalQuiz.length) * 100);
  };

  return (
    <section className="course-section review-section">
      <div className="section-header">
        <div className="section-number">{number}</div>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="section-content">
        {content.summary && (
          <div className="review-summary">
            <p>{content.summary}</p>
          </div>
        )}

        {content.coreValuesReview && (
          <div className="values-review">
            <h3>Core Values Summary</h3>
            <div className="values-cards">
              {content.coreValuesReview.map((value, index) => (
                <div key={index} className="review-value-card">
                  <h4>{value.term}</h4>
                  <p>{value.definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {content.keyTakeaways && (
          <div className="key-takeaways">
            <h3>Key Takeaways</h3>
            <ul>
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}

        {content.finalQuiz && (
          <div className="final-quiz">
            <h3 className="final-quiz-title">
              <Award size={24} />
              Final Knowledge Check
            </h3>

            {content.finalQuiz.map((question, qIndex) => (
              <div key={question.id} className="quiz-question">
                <p className="question-text">
                  <strong>Question {qIndex + 1}:</strong> {question.question}
                </p>
                <div className="quiz-options">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="quiz-option">
                      <input
                        type="radio"
                        name={question.id}
                        checked={quizAnswers[question.id] === oIndex}
                        onChange={() => handleAnswer(question.id, oIndex)}
                        disabled={showResults}
                      />
                      <span>{option}</span>
                      {showResults && (
                        oIndex === question.correctAnswer ?
                        <CheckCircle size={18} className="correct-mark" /> :
                        quizAnswers[question.id] === oIndex && <XCircle size={18} className="incorrect-mark" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {!showResults && Object.keys(quizAnswers).length === content.finalQuiz.length && (
              <Button onClick={submitQuiz} className="submit-final-btn">
                Submit Final Quiz
              </Button>
            )}

            {showResults && (
              <div className="quiz-results">
                <div className="score-display">
                  <Award size={48} />
                  <h3>Your Score: {calculateScore()}%</h3>
                  <p>
                    {calculateScore() >= 75
                      ? "Excellent work! You've mastered the concepts!"
                      : "Good effort! Review the material and try again."}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
