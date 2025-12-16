"use client";

import { useState, useRef, use } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Check, Lock, PlayCircle, Menu, X } from "lucide-react";
import { sampleCourses } from "@/constants/courseData";
import "./course-player.css";

export default function CoursePlayerPage({ params }) {
  const resolvedParams = use(params);
  const courseId = resolvedParams?.id || "honest-and-fairness";
  const course = sampleCourses[courseId] || sampleCourses["honest-and-fairness"];
  const videoSource = course.learningVideo || "/video.mp4";

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock completed lessons (in real app, this would come from user progress data)
  const [completedLessons, setCompletedLessons] = useState([
    { sectionIndex: 0, lessonIndex: 0 },
  ]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      videoRef.current.currentTime = percentage * duration;
    }
  };

  const isLessonCompleted = (sectionIndex, lessonIndex) => {
    return completedLessons.some(
      (lesson) => lesson.sectionIndex === sectionIndex && lesson.lessonIndex === lessonIndex
    );
  };

  const isLessonCurrent = (sectionIndex, lessonIndex) => {
    return currentSection === sectionIndex && currentLesson === lessonIndex;
  };

  const getCurrentLesson = () => {
    if (course.curriculum && course.curriculum[currentSection]) {
      return course.curriculum[currentSection].lessons[currentLesson];
    }
    return null;
  };

  const selectLesson = (sectionIndex, lessonIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentLesson(lessonIndex);
    setIsPlaying(false);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const goToNextLesson = () => {
    const currentSectionData = course.curriculum[currentSection];

    // Mark current lesson as completed
    if (!isLessonCompleted(currentSection, currentLesson)) {
      setCompletedLessons([...completedLessons, { sectionIndex: currentSection, lessonIndex: currentLesson }]);
    }

    // Check if there's a next lesson in current section
    if (currentLesson < currentSectionData.lessons.length - 1) {
      selectLesson(currentSection, currentLesson + 1);
    } else if (currentSection < course.curriculum.length - 1) {
      // Move to next section
      selectLesson(currentSection + 1, 0);
    }
  };

  const currentLessonData = getCurrentLesson();
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="course-player-page">
      {/* Mobile Sidebar Toggle */}
      <button
        className="mobile-sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        <span>{isSidebarOpen ? 'Close' : 'Course Content'}</span>
      </button>

      <div className="player-container">
        {/* Sidebar Navigation */}
        <aside className={`course-sidebar-nav ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-header">
            <h2 className="sidebar-title">{course.title}</h2>
            <p className="course-progress">
              {completedLessons.length} of {course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0)} completed
            </p>
          </div>

          <div className="sections-list">
            {course.curriculum?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="section-item">
                <div className="section-header">
                  <h3 className="section-title">{section.title}</h3>
                  <span className="section-duration">{section.duration}</span>
                </div>
                <ul className="lessons-list">
                  {section.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = isLessonCompleted(sectionIndex, lessonIndex);
                    const isCurrent = isLessonCurrent(sectionIndex, lessonIndex);

                    return (
                      <li
                        key={lessonIndex}
                        className={`lesson-item ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        onClick={() => selectLesson(sectionIndex, lessonIndex)}
                      >
                        <div className="lesson-icon">
                          {isCompleted ? (
                            <Check size={16} />
                          ) : lesson.type === 'video' ? (
                            <PlayCircle size={16} />
                          ) : (
                            <Lock size={16} />
                          )}
                        </div>
                        <div className="lesson-info">
                          <span className="lesson-name">{lesson.title}</span>
                          <span className="lesson-duration">{lesson.duration}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="course-main-content">
          {/* Video Player */}
          <div className="video-player-wrapper">
            <video
              ref={videoRef}
              className="video-player"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              poster="/api/placeholder/1280/720"
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="video-controls">
              <div className="progress-bar" onClick={handleProgressClick}>
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="controls-row">
                <div className="controls-left">
                  <button className="control-btn" onClick={togglePlay}>
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="control-btn" onClick={toggleMute}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <span className="time-display">
                    {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')} /{' '}
                    {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
                  </span>
                </div>
                <div className="controls-right">
                  <button className="control-btn" onClick={toggleFullscreen}>
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lesson-content">
            <div className="lesson-header">
              <h1 className="lesson-title">{currentLessonData?.title}</h1>
              <span className="lesson-type-badge">{currentLessonData?.type}</span>
            </div>

            <div className="lesson-description">
              <h2>About this lesson</h2>
              <p>
                In this lesson, you'll learn about the fundamental concepts of integrity and fairness.
                We'll explore real-world scenarios that demonstrate how honesty and ethical behavior
                impact our communities.
              </p>
              <p>
                Through interactive examples and engaging storytelling, you'll develop a deeper
                understanding of why these values matter and how you can apply them in your daily life.
              </p>

              <h3>Key Takeaways</h3>
              <ul className="takeaways-list">
                <li>Understand the core principles of integrity and fairness</li>
                <li>Recognize situations where ethical decisions are required</li>
                <li>Learn practical strategies for acting with honesty</li>
                <li>Identify the impact of corruption on communities</li>
              </ul>
            </div>

            <div className="lesson-actions">
              <button className="btn-secondary">Previous Lesson</button>
              <button className="btn-primary" onClick={goToNextLesson}>
                Complete & Continue
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
