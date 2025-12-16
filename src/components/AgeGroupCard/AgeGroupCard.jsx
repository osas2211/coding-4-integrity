"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import { useViewTransition } from "@/hooks/useViewTransition";
import "./AgeGroupCard.css";

gsap.registerPlugin(ScrollTrigger);

export default function AgeGroupCard({ group, index }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { navigateWithTransition } = useViewTransition();

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;

    if (!card || !content || !icon) return;

    // Initial animation
    gsap.set(card, { y: 100, opacity: 0 });
    gsap.set(content, { y: 20, opacity: 0 });
    gsap.set(icon, { scale: 0, rotation: -180 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.15
    })
    .to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(content, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [index]);

  const handleClick = () => {
    navigateWithTransition(group.href);
  };

  return (
    <div
      ref={cardRef}
      className="age-group-card"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ "--card-color": group.color }}
    >
      <div className="card-glow"></div>

      <div className="card-header">
        <div ref={iconRef} className="card-icon">
          {group.icon}
        </div>
        <div className="card-badge">{group.ageRange}</div>
      </div>

      <div ref={contentRef} className="card-content">
        <h2 className="card-title">{group.title}</h2>
        <p className="card-description">{group.description}</p>

        <div className="card-features">
          {group.features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-dot"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="card-stats">
          <div className="stat-item">
            <BookOpen size={18} />
            <span>{group.courseCount} Courses</span>
          </div>
          <div className="stat-item">
            <Users size={18} />
            <span>Active Learning</span>
          </div>
        </div>
      </div>

      <div className={`card-footer ${isHovered ? "hovered" : ""}`}>
        <span>Explore Courses</span>
        <ArrowRight size={20} className="arrow-icon" />
      </div>
    </div>
  );
}
