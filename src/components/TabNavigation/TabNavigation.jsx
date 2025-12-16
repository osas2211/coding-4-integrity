"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import "./TabNavigation.css";

export default function TabNavigation({ defaultTab = "overview", children }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabItems = [
    { id: "overview", label: "Overview" },
    { id: "content", label: "Course content" },
    { id: "instructor", label: "Instructor" },
    { id: "reviews", label: "Reviews" }
  ];

  return (
    <div className="tab-navigation">
      <div className="tab-list">
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "tab-button",
              activeTab === tab.id && "tab-button--active"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {children && typeof children === 'function' ? children(activeTab) : children}
      </div>
    </div>
  );
}
