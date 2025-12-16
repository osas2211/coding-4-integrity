"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";
import "./coming-soon.css";

gsap.registerPlugin(ScrollTrigger);

export default function ComingSoonPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
      gsap.to(circle, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <div className="coming-soon-page" ref={containerRef}>
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <section className="coming-soon-hero">
        <div className="container">
          <Copy animateOnScroll={false} delay={0.3}>
            <div className="status-badge">Coming Soon</div>
          </Copy>

          <Copy animateOnScroll={false} delay={0.6}>
            <h1 className="hero-title">We're Building Something Special</h1>
          </Copy>

          <Copy animateOnScroll={false} delay={0.9}>
            <p className="hero-subtitle">
              This page is currently under construction. We're working hard to
              bring you an amazing experience focused on integrity, ethics, and
              anti-corruption education.
            </p>
          </Copy>

          <Copy animateOnScroll={false} delay={1.2}>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h3>Interactive Lessons</h3>
                <p>Engaging content designed for all age groups</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎮</div>
                <h3>Gamified Learning</h3>
                <p>Learn through fun, interactive activities</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <h3>Track Progress</h3>
                <p>Monitor your journey and earn certificates</p>
              </div>
            </div>
          </Copy>

          <Copy animateOnScroll={false} delay={1.5}>
            <div className="cta-section">
              <a href="/courses" className="back-btn">
                ← Back to Courses
              </a>
            </div>
          </Copy>
        </div>
      </section>

      <section className="coming-soon-footer">
        <div className="container">
          <Copy animateOnScroll={true} delay={0.25}>
            <p className="footer-text">
              Stay tuned for updates. We'll be launching this content soon!
            </p>
          </Copy>
        </div>
      </section>
    </div>
  );
}
