"use client";

import { useState, useRef } from "react";
import {
  Play,
  Heart,
  Globe,
  Subtitles,
  Clock,
  Award,
  ClipboardCheck,
  FileText,
  BookOpen,
  Download,
  CheckCircle,
  ArrowRight,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useViewTransition } from "@/hooks/useViewTransition";
import "./CourseSidebar.css";

const iconMap = {
  language: Globe,
  subtitles: Subtitles,
  clock: Clock,
  certificate: Award,
  clipboard: ClipboardCheck,
  assignment: FileText,
  articles: BookOpen,
  download: Download,
};

export default function CourseSidebar({ course }) {
  const {
    id,
    pricing,
    preview,
    overviewVideo,
    moneyBackGuarantee,
    courseIncludes,
    nextCourseId,
  } = course;
  const { navigateWithTransition } = useViewTransition();
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Globe;
    return <IconComponent size={18} />;
  };

  const handleStartCourse = () => {
    navigateWithTransition(`/courses/${id}/learn`);
  };

  const handleNextCourse = () => {
    if (nextCourseId) {
      navigateWithTransition(`/courses/${nextCourseId}`);
    }
  };

  const toggleVideoPreview = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <div className="course-sidebar">
      <Card className="sidebar-card">
        <CardContent className="sidebar-content">
          {/* Preview Video */}
          <div className="preview-container">
            {overviewVideo ? (
              <>
                <video
                  ref={videoRef}
                  className="preview-video"
                  poster={preview.image}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src={overviewVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button className="preview-button" onClick={toggleVideoPreview}>
                  {isVideoPlaying ? (
                    <>
                      <Pause size={20} fill="white" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={20} fill="white" />
                      <span>Preview</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <img
                  src={preview.image}
                  alt="Course preview"
                  className="preview-image"
                />
                <button className="preview-button">
                  <Play size={20} fill="white" />
                  <span>Preview</span>
                </button>
              </>
            )}
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <div className="price-row">
              <div className="price-info">
                <span className="current-price">
                  {pricing.current === 0
                    ? ""
                    : `${pricing.currency}${pricing.current.toFixed(2)}`}
                </span>
                {pricing.original > 0 &&
                  pricing.current !== pricing.original && (
                    <span className="original-price">
                      {pricing.currency}
                      {pricing.original.toFixed(2)}
                    </span>
                  )}
              </div>
              {pricing.discount > 0 && (
                <span className="discount-badge">{pricing.discount}% off!</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Button
                className="start-course-btn"
                size="lg"
                onClick={handleStartCourse}
              >
                Start course
              </Button>
              <button className="wishlist-btn">
                <Heart size={20} />
              </button>
            </div>

            {/* Next Course Button */}
            {nextCourseId && (
              <Button
                className="next-course-btn"
                variant="outline"
                size="lg"
                onClick={handleNextCourse}
              >
                Next Course
                <ArrowRight size={18} />
              </Button>
            )}

            {/* Money Back Guarantee - Only show for paid courses */}
            {pricing.current > 0 && (
              <div className="guarantee">
                <CheckCircle size={16} />
                <span>{moneyBackGuarantee} day money back guarantee</span>
              </div>
            )}
          </div>

          {/* Course Includes */}
          <div className="course-includes">
            <h3 className="includes-title">This course includes:</h3>
            <ul className="includes-list">
              {courseIncludes.map((item, index) => (
                <li key={index} className="include-item">
                  <span className="include-icon">{getIcon(item.icon)}</span>
                  <span className="include-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
