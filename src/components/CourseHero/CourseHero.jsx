"use client";

import { Star, Calendar } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import "./CourseHero.css";

export default function CourseHero({ course }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? "star-filled" : "star-empty"}
        fill={index < Math.floor(rating) ? "#FFA500" : "none"}
      />
    ));
  };

  return (
    <div className="course-hero">
      {/* Badges */}
      <div className="course-badges">
        <Badge variant="secondary" className="badge-intermediate">
          {course.alternateLevel}
        </Badge>
        <Badge variant="default" className="badge-advanced">
          {course.level}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="course-title">{course.title}</h1>

      {/* Rating and Stats */}
      <div className="course-stats">
        <div className="rating">
          <span className="rating-number">{course.rating}</span>
          <div className="stars">{renderStars(course.rating)}</div>
          <span className="rating-count">{course.reviewsCount.toLocaleString()}</span>
          <span className="students-count">
            {course.studentsCount.toLocaleString()} students
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="course-description">{course.description}</p>

      {/* Creator Info */}
      <div className="course-creator">
        <div className="creator-info">
          <div className="creator-icon">📚</div>
          <Avatar className="creator-avatar">
            <AvatarImage src={course.creator.avatar} alt={course.creator.name} />
            <AvatarFallback>{course.creator.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="creator-details">
            <span className="creator-label">Created by</span>
            <span className="creator-name">{course.creator.name}</span>
          </div>
        </div>
        <div className="last-updated">
          <Calendar size={16} />
          <span>Last updated {course.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
