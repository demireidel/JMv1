"use client";

import { useInView } from "@/hooks";

export default function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`fade-in${inView ? " visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
