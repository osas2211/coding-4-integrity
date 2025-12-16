"use client";

import { Star } from "lucide-react";
import "./TabContent.css";

export default function ReviewsTab({ reviews = [], rating = 4.5, reviewsCount = 2200 }) {
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

  // Rating breakdown data
  const ratingBreakdown = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 22 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  // Default reviews if none provided
  const defaultReviews = [
    {
      name: "Sarah Mitchell",
      avatar: "SM",
      rating: 5,
      date: "2 weeks ago",
      text: "This course exceeded my expectations! Amanda's teaching style is clear and engaging. The practical examples and case studies really helped me understand how to apply HR concepts in real-world scenarios. Highly recommended for anyone starting in HR."
    },
    {
      name: "David Chen",
      avatar: "DC",
      rating: 5,
      date: "1 month ago",
      text: "Excellent comprehensive overview of HR management. The course content is well-structured and covers all essential topics. The assignments were challenging but rewarding. Great value for money!"
    },
    {
      name: "Maria Rodriguez",
      avatar: "MR",
      rating: 4,
      date: "1 month ago",
      text: "Very informative course with lots of practical insights. Amanda is clearly an expert in the field. My only suggestion would be to include more interactive elements, but overall a great learning experience."
    },
    {
      name: "James Wilson",
      avatar: "JW",
      rating: 5,
      date: "2 months ago",
      text: "As a small business owner, this course helped me understand how to manage my team more effectively. The sections on performance management and employee relations were particularly valuable."
    },
    {
      name: "Emily Thompson",
      avatar: "ET",
      rating: 5,
      date: "2 months ago",
      text: "One of the best HR courses I've taken online. The content is up-to-date, relevant, and presented in an easy-to-understand manner. The certificate I received has already helped me in job interviews!"
    },
    {
      name: "Robert Kim",
      avatar: "RK",
      rating: 4,
      date: "3 months ago",
      text: "Solid course that covers the fundamentals well. Good mix of theory and practice. Would have liked more advanced topics, but for a generalist HR course, it's excellent."
    }
  ];

  const reviewsData = reviews.length > 0 ? reviews : defaultReviews;

  return (
    <div className="reviews-tab">
      {/* Reviews Summary */}
      <div className="reviews-summary">
        <div className="rating-overview">
          <div className="rating-number-large">{rating}</div>
          <div className="rating-stars-large">{renderStars(rating)}</div>
          <div className="rating-count-text">{reviewsCount.toLocaleString()} ratings</div>
        </div>

        <div className="rating-breakdown">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="rating-bar">
              <div className="rating-label">
                <Star size={14} fill="#FFA500" stroke="#FFA500" />
                {item.stars}
              </div>
              <div className="rating-bar-track">
                <div
                  className="rating-bar-fill"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <div className="rating-percentage">{item.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="review-list">
        {reviewsData.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-header">
              <div className="reviewer-avatar">{review.avatar}</div>
              <div className="reviewer-info">
                <div className="reviewer-name">{review.name}</div>
                <div className="review-meta">
                  <div className="review-stars">{renderStars(review.rating)}</div>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
