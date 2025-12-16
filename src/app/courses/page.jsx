"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";
import AgeGroupCard from "@/components/AgeGroupCard/AgeGroupCard";
import "./courses.css";

gsap.registerPlugin(ScrollTrigger);

export default function CoursesPage() {
  const ageGroups = [
    {
      id: "children",
      title: "Children",
      ageRange: "8-12 Years",
      description: "Fun and interactive lessons designed for young minds to understand integrity and ethics.",
      color: "var(--accent-1)",
      icon: "🎨",
      features: ["Interactive Games", "Story-based Learning", "Age-appropriate Content"],
      courseCount: 12,
      href: "/courses/children"
    },
    {
      id: "teens",
      title: "Teens",
      ageRange: "14-17 Years",
      description: "Engaging content that helps teenagers develop critical thinking about corruption and ethics.",
      color: "var(--accent-2)",
      icon: "🎯",
      features: ["Real-world Scenarios", "Peer Discussions", "Digital Citizenship"],
      courseCount: 15,
      href: "/courses/teens"
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "18+ Years",
      description: "Comprehensive courses on anti-corruption practices, governance, and professional ethics.",
      color: "var(--accent-5)",
      icon: "🎓",
      features: ["Professional Development", "Case Studies", "Certification Programs"],
      courseCount: 20,
      href: "/courses/adults"
    }
  ];

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

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <Copy animateOnScroll={false} delay={0.5}>
              <h1>Choose Your Learning Path</h1>
            </Copy>
            <Copy animateOnScroll={false} delay={0.85}>
              <p className="courses-subtitle">
                Select the age group to explore tailored anti-corruption courses
              </p>
            </Copy>
          </div>
        </div>
      </section>

      <section className="age-groups-section">
        <div className="container">
          <div className="age-groups-grid">
            {ageGroups.map((group, index) => (
              <AgeGroupCard
                key={group.id}
                group={group}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="courses-footer">
        <div className="container">
          <Copy animateOnScroll={true} delay={0.25}>
            <p className="footer-text">
              All courses are designed by education experts and aligned with global anti-corruption standards
            </p>
          </Copy>
        </div>
      </section>
    </div>
  );
}
