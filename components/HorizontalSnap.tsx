"use client";
import * as React from "react";

export default function HorizontalSnap({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={["-mx-4 px-4 sm:mx-0 sm:px-0", className].join(" ")}>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-2">
        {React.Children.map(children, (child, i) => (
          <div key={i} className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-auto">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
