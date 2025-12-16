"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import "./VideoIntro.css";

export default function VideoIntro({ videoPath = "/video.mp4", onComplete }) {
  const [showContinue, setShowContinue] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setShowContinue(true);
  };

  const handleContinue = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="video-intro-overlay">
      <div className="video-intro-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video-player"
            autoPlay
            controls
            onEnded={handleVideoEnded}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay that appears when video ends */}
          {showContinue && (
            <div className="video-dark-overlay"></div>
          )}
        </div>

        {showContinue && (
          <div className="continue-section">
            <Button
              onClick={handleContinue}
              className="continue-button"
              size="lg"
            >
              Continue to Course
            </Button>
            <p className="continue-hint">Click to start your learning journey</p>
          </div>
        )}
      </div>
    </div>
  );
}
