"use client";

import { useState, use } from "react";
import VideoIntro from "@/components/VideoIntro/VideoIntro";
import CourseHeader from "@/components/CourseHeader/CourseHeader";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CourseHero from "@/components/CourseHero/CourseHero";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import CourseSidebar from "@/components/CourseSidebar/CourseSidebar";
import OverviewTab from "@/components/TabContent/OverviewTab";
import CourseContentTab from "@/components/TabContent/CourseContentTab";
import InstructorTab from "@/components/TabContent/InstructorTab";
import ReviewsTab from "@/components/TabContent/ReviewsTab";
import { sampleCourses } from "@/constants/courseData";
import "./course-detail.css";

export default function CoursePage({ params }) {
  const [showIntroVideo, setShowIntroVideo] = useState(true);

  // Unwrap params Promise for Next.js 15+
  const resolvedParams = use(params);

  // Get course data
  const courseId = resolvedParams?.id || "honest-and-fairness";
  const course = sampleCourses[courseId] || sampleCourses["honest-and-fairness"];
  const introVideoPath = course.overviewVideo || "/video.mp4";

  // Render tab content based on active tab
  const renderTabContent = (activeTab) => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab course={course} />;
      case "content":
        return <CourseContentTab curriculum={course.curriculum} />;
      case "instructor":
        return <InstructorTab instructor={course.instructor} />;
      case "reviews":
        return <ReviewsTab rating={course.rating} reviewsCount={course.reviewsCount} />;
      default:
        return <OverviewTab course={course} />;
    }
  };

  const handleVideoComplete = () => {
    setShowIntroVideo(false);
  };

  return (
    <div className="course-page">
      {/* Intro Video Overlay */}
      {showIntroVideo && (
        <VideoIntro
          videoPath={introVideoPath}
          onComplete={handleVideoComplete}
        />
      )}

      {/* Main Course Content */}
      <CourseHeader />

      <div className="course-container">
        <div className="course-layout">
          {/* Main Content */}
          <div className="course-main">
            <Breadcrumb items={course.breadcrumb} />
            <CourseHero course={course} />
            <TabNavigation defaultTab="overview">
              {renderTabContent}
            </TabNavigation>
          </div>

          {/* Sidebar */}
          <aside className="course-aside">
            <CourseSidebar course={course} />
          </aside>
        </div>
      </div>
    </div>
  );
}
