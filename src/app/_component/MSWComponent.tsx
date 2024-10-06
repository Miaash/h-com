"use client";

import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    // 브라우저 환경일 때만 동작
    if (typeof window !== "undefined") {
      // enabled일 경우에만 msw실행. - local환경에서만!
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);
  return null;
};
