"use client";

import { Target } from "lucide-react";
import "./Sections.css";

export default function IntroductionSection({ data }) {
  const { number, title, content } = data;

  return (
    <section className="course-section introduction-section">
      <div className="section-header">
        <div className="section-number">{number}</div>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="section-content">
        {content.welcome && (
          <div className="welcome-message">
            <p>{content.welcome}</p>
          </div>
        )}

        {content.keyTopics && (
          <div className="key-topics">
            {content.keyTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <h3 className="topic-heading">{topic.heading}</h3>
                <p className="topic-text">{topic.text}</p>
                {topic.bulletPoints && (
                  <ul className="topic-bullets">
                    {topic.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {content.objectives && (
          <div className="objectives-box">
            <div className="objectives-header">
              <Target size={24} />
              <h3>Module Objectives</h3>
            </div>
            <ul className="objectives-list">
              {content.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
