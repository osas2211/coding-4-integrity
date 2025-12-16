"use client";

import IntroductionSection from "./sections/IntroductionSection";
import ContentSection from "./sections/ContentSection";
import InteractiveSection from "./sections/InteractiveSection";
import ReviewSection from "./sections/ReviewSection";
import "./CourseModule.css";

export default function CourseModule({ moduleData }) {
  if (!moduleData) return null;

  const renderSection = (section) => {
    switch (section.type) {
      case "introduction":
        return <IntroductionSection key={section.id} data={section} />;
      case "content":
        return <ContentSection key={section.id} data={section} />;
      case "interactive":
        return <InteractiveSection key={section.id} data={section} />;
      case "review":
        return <ReviewSection key={section.id} data={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="course-module">
      {/* Module Header */}
      <div className="module-header">
        <div className="module-meta">
          <span className="age-group">{moduleData.ageGroup}</span>
          <span className="module-number">Module {moduleData.moduleNumber}</span>
        </div>
        <h1 className="module-title">{moduleData.moduleTitle}</h1>
        <p className="module-description">{moduleData.description}</p>
        <div className="course-title-tag">{moduleData.courseTitle}</div>
      </div>

      {/* Module Sections */}
      <div className="module-sections">
        {moduleData.sections.map((section) => renderSection(section))}
      </div>
    </div>
  );
}
