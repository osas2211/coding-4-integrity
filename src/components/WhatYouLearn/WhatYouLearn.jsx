"use client";

import { Check } from "lucide-react";
import "./WhatYouLearn.css";

export default function WhatYouLearn({ items = [] }) {
  return (
    <div className="what-you-learn">
      <h2 className="section-title">
        <span className="title-icon">📚</span>
        What you'll learn
      </h2>
      <div className="learning-items">
        {items.map((item, index) => (
          <div key={index} className="learning-item">
            <div className="check-icon">
              <Check size={20} strokeWidth={3} />
            </div>
            <p className="learning-text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
