"use client";

import { Play, Heart, Globe, Subtitles, Clock, Award, ClipboardCheck, FileText, BookOpen, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./CourseSidebar.css";

const iconMap = {
  language: Globe,
  subtitles: Subtitles,
  clock: Clock,
  certificate: Award,
  clipboard: ClipboardCheck,
  assignment: FileText,
  articles: BookOpen,
  download: Download
};

export default function CourseSidebar({ course }) {
  const { pricing, preview, moneyBackGuarantee, courseIncludes } = course;

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Globe;
    return <IconComponent size={18} />;
  };

  return (
    <div className="course-sidebar">
      <Card className="sidebar-card">
        <CardContent className="sidebar-content">
          {/* Preview Image */}
          <div className="preview-container">
            <img
              src={preview.image}
              alt="Course preview"
              className="preview-image"
            />
            <button className="preview-button">
              <Play size={20} fill="white" />
              <span>Preview</span>
            </button>
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <div className="price-row">
              <div className="price-info">
                <span className="current-price">
                  {pricing.current === 0 ? 'Free' : `${pricing.currency}${pricing.current.toFixed(2)}`}
                </span>
                {pricing.original > 0 && pricing.current !== pricing.original && (
                  <span className="original-price">
                    {pricing.currency}{pricing.original.toFixed(2)}
                  </span>
                )}
              </div>
              {pricing.discount > 0 && (
                <span className="discount-badge">{pricing.discount}% off!</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Button className="start-course-btn" size="lg">
                Start course
              </Button>
              <button className="wishlist-btn">
                <Heart size={20} />
              </button>
            </div>

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
