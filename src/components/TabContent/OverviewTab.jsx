"use client";

import WhatYouLearn from "@/components/WhatYouLearn/WhatYouLearn";
import "./TabContent.css";

export default function OverviewTab({ course }) {
  return (
    <div className="overview-tab">
      <WhatYouLearn items={course.whatYouLearn} />

      {/* Course Description */}
      <div className="course-overview-section">
        <h3 className="section-heading">Course Description</h3>
        <p className="section-text">{course.description}</p>
      </div>
    </div>
  );
}
