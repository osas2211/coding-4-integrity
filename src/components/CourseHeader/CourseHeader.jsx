"use client";

import { Search, Heart, ShoppingCart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import "./CourseHeader.css";

export default function CourseHeader() {
  return (
    <header className="course-header">
      <div className="course-header__container">
        {/* Logo */}
        <div className="course-header__logo">
          <span className="logo-text">C4I</span>
        </div>

        {/* Navigation */}
        <nav className="course-header__nav">
          <a href="/courses" className="nav-link">
            Courses
          </a>
          <a href="/business" className="nav-link">
            For business
          </a>
          <a href="/teach" className="nav-link">
            Become a teacher
          </a>
        </nav>

        {/* Search */}
        <div className="course-header__search">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Actions */}
        <div className="course-header__actions">
          <button className="action-btn">
            <Heart size={20} />
          </button>
          <button className="action-btn">
            <ShoppingCart size={20} />
          </button>
          <Avatar className="user-avatar">
            <AvatarImage src="/api/placeholder/40/40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
