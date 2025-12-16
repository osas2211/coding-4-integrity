"use client";

import { Star, Users, PlayCircle, Award } from "lucide-react";
import "./TabContent.css";

export default function InstructorTab({ instructor }) {
  // Default instructor data if none provided
  const defaultInstructor = {
    name: "Amanda Kim",
    title: "Senior HR Consultant & Educator",
    organization: "HR University",
    avatar: "/api/placeholder/120/120",
    rating: 4.7,
    reviewsCount: 12340,
    studentsCount: 85240,
    coursesCount: 18,
    bio: "Amanda Kim is a seasoned HR professional with over 15 years of experience in human resource management. She has worked with Fortune 500 companies and startups alike, helping them build effective HR systems and develop their people strategies. Amanda holds a Master's degree in Human Resource Management from Cornell University and is certified as a Senior Professional in Human Resources (SPHR).",
    expertise: [
      "Talent Acquisition & Recruitment",
      "Performance Management Systems",
      "Compensation & Benefits Design",
      "Employee Relations",
      "HR Strategy & Planning",
      "Organizational Development"
    ]
  };

  const instructorData = instructor || defaultInstructor;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={index < Math.floor(rating) ? "star-filled" : "star-empty"}
        fill={index < Math.floor(rating) ? "#FFA500" : "none"}
        stroke={index < Math.floor(rating) ? "#FFA500" : "#DDD"}
      />
    ));
  };

  return (
    <div className="instructor-tab">
      <div className="instructor-profile">
        <img
          src={instructorData.avatar}
          alt={instructorData.name}
          className="instructor-avatar-large"
        />
        <div className="instructor-info">
          <h2 className="instructor-name">{instructorData.name}</h2>
          <p className="instructor-title">{instructorData.title}</p>
          {instructorData.organization && (
            <p className="instructor-title">{instructorData.organization}</p>
          )}

          <div className="instructor-stats">
            <div className="stat-item">
              <Star className="stat-icon" size={20} />
              <span>{instructorData.rating} Instructor Rating</span>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" size={20} />
              <span>{instructorData.reviewsCount.toLocaleString()} Reviews</span>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" size={20} />
              <span>{instructorData.studentsCount.toLocaleString()} Students</span>
            </div>
            <div className="stat-item">
              <PlayCircle className="stat-icon" size={20} />
              <span>{instructorData.coursesCount} Courses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="course-overview-section">
        <h3 className="section-heading">About the Instructor</h3>
        <p className="instructor-bio">{instructorData.bio}</p>
      </div>

      {instructorData.expertise && (
        <div className="course-overview-section">
          <h3 className="section-heading">Areas of Expertise</h3>
          <div className="expertise-grid">
            {instructorData.expertise.map((area, index) => (
              <div key={index} className="expertise-badge">
                {area}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
