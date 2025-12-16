"use client";

import { Heart, Scale, Shield } from "lucide-react";
import "./Sections.css";

const iconMap = {
  "Honesty: Telling the Truth": Heart,
  "Fairness: Playing by the Rules": Scale,
  "Integrity: Doing the Right Thing": Shield
};

export default function ContentSection({ data }) {
  const { number, title, content } = data;

  const getIcon = (valueName) => {
    const Icon = iconMap[valueName] || Shield;
    return <Icon size={32} />;
  };

  return (
    <section className="course-section content-section">
      <div className="section-header">
        <div className="section-number">{number}</div>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="section-content">
        {content.introduction && (
          <p className="intro-text">{content.introduction}</p>
        )}

        {content.coreValues && (
          <div className="core-values">
            {content.coreValues.intro && (
              <p className="values-intro">{content.coreValues.intro}</p>
            )}

            <div className="values-grid">
              {content.coreValues.values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{getIcon(value.name)}</div>
                  <h3 className="value-name">{value.name}</h3>
                  <p className="value-definition">{value.definition}</p>

                  {value.highlight && (
                    <div className="value-highlight">
                      <p>{value.highlight}</p>
                    </div>
                  )}

                  {value.explanation && (
                    <p className="value-explanation">{value.explanation}</p>
                  )}

                  {value.reflection && (
                    <div className="value-reflection">
                      <strong>Think About It:</strong> {value.reflection}
                    </div>
                  )}

                  {value.keyPoints && (
                    <ul className="value-points">
                      {value.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
