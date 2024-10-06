"use client";
import { usePathname } from "next/navigation";
import Trend from "./Trend";
import style from "./trendSection.module.css";

export default function TrendSection() {
  const pathname = usePathname();

  if (pathname === "/explore") return null;
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>Trends for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
