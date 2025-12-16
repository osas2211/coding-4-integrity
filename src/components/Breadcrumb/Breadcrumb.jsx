"use client";

import { ChevronRight } from "lucide-react";
import "./Breadcrumb.css";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {index < items.length - 1 ? (
            <>
              <a href="#" className="breadcrumb-link">{item}</a>
              <ChevronRight size={14} className="breadcrumb-separator" />
            </>
          ) : (
            <span className="breadcrumb-current">{item}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
