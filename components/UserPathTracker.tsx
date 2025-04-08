"use client";

import { detectUserPath } from "@/utils/acquistion";
import { useEffect } from "react";

const TrackUserPath = () => {
  useEffect(() => {
    const existing = localStorage.getItem("path");
    if (!existing) {
      const path = detectUserPath();
      localStorage.setItem("path", path);
    }
  }, []);

  return null;
};

export default TrackUserPath;
