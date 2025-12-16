"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle, FileText, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import "./TabContent.css";

export default function CourseContentTab({ curriculum = [] }) {
  const [openSections, setOpenSections] = useState([0]); // First section open by default

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  // Default curriculum if none provided
  const defaultCurriculum = [
    {
      title: "Introduction to Human Resource Management",
      lectureCount: 8,
      duration: "1h 15m",
      lessons: [
        { title: "Welcome to the Course", type: "video", duration: "5:30" },
        { title: "What is Human Resource Management?", type: "video", duration: "12:45" },
        { title: "HR's Role in Organizations", type: "video", duration: "15:20" },
        { title: "Evolution of HR Practices", type: "video", duration: "10:15" },
        { title: "Reading: HR Management Framework", type: "reading", duration: "10 min" },
        { title: "Quiz: Introduction to HR", type: "quiz", duration: "5 min" },
      ]
    },
    {
      title: "Talent Acquisition and Recruitment",
      lectureCount: 12,
      duration: "2h 30m",
      lessons: [
        { title: "Recruitment Planning", type: "video", duration: "18:30" },
        { title: "Job Analysis and Description", type: "video", duration: "22:15" },
        { title: "Sourcing Strategies", type: "video", duration: "20:00" },
        { title: "Interview Techniques", type: "video", duration: "25:45" },
        { title: "Selection and Onboarding", type: "video", duration: "19:30" },
        { title: "Assignment: Create a Job Description", type: "assignment", duration: "30 min" },
      ]
    },
    {
      title: "Performance Management",
      lectureCount: 10,
      duration: "2h 10m",
      lessons: [
        { title: "Performance Management Systems", type: "video", duration: "16:20" },
        { title: "Setting Goals and Objectives", type: "video", duration: "18:45" },
        { title: "Performance Appraisal Methods", type: "video", duration: "21:30" },
        { title: "Providing Effective Feedback", type: "video", duration: "15:25" },
        { title: "Managing Underperformance", type: "video", duration: "17:00" },
      ]
    },
    {
      title: "Compensation and Benefits",
      lectureCount: 9,
      duration: "1h 50m",
      lessons: [
        { title: "Compensation Structures", type: "video", duration: "19:30" },
        { title: "Benefits Administration", type: "video", duration: "16:45" },
        { title: "Salary Benchmarking", type: "video", duration: "14:20" },
        { title: "Incentive Programs", type: "video", duration: "18:00" },
      ]
    },
    {
      title: "Employee Relations and Engagement",
      lectureCount: 11,
      duration: "2h 20m",
      lessons: [
        { title: "Building Employee Engagement", type: "video", duration: "20:15" },
        { title: "Conflict Resolution", type: "video", duration: "22:30" },
        { title: "Workplace Culture", type: "video", duration: "18:45" },
        { title: "Employee Wellness Programs", type: "video", duration: "16:30" },
      ]
    }
  ];

  const curriculumData = curriculum.length > 0 ? curriculum : defaultCurriculum;

  const getIcon = (type) => {
    switch (type) {
      case "video":
        return <PlayCircle size={18} />;
      case "reading":
      case "assignment":
      case "quiz":
        return <FileText size={18} />;
      default:
        return <PlayCircle size={18} />;
    }
  };

  return (
    <div className="content-tab">
      <div className="curriculum-header">
        <h3 className="section-heading">Course Curriculum</h3>
        <p className="section-text">
          {curriculumData.length} sections • {curriculumData.reduce((acc, s) => acc + s.lectureCount, 0)} lectures • {curriculumData.reduce((acc, s) => {
            const hours = parseInt(s.duration.split('h')[0]) || 0;
            const mins = parseInt(s.duration.split('h')[1]?.split('m')[0]) || parseInt(s.duration.split('m')[0]) || 0;
            return acc + (hours * 60) + mins;
          }, 0)} min total length
        </p>
      </div>

      <div className="section-accordion">
        {curriculumData.map((section, index) => (
          <div key={index} className="accordion-item">
            <button
              onClick={() => toggleSection(index)}
              className={cn(
                "accordion-header",
                openSections.includes(index) && "active"
              )}
            >
              <div>
                <div className="accordion-title">{section.title}</div>
                <div className="accordion-meta">
                  {section.lectureCount} lectures • {section.duration}
                </div>
              </div>
              {openSections.includes(index) ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={cn(
                "accordion-content",
                openSections.includes(index) && "active"
              )}
            >
              <ul className="lesson-list">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="lesson-item">
                    <div className="lesson-info">
                      <span className="lesson-icon">{getIcon(lesson.type)}</span>
                      <span className="lesson-title">{lesson.title}</span>
                    </div>
                    <span className="lesson-duration">
                      <Clock size={14} /> {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
