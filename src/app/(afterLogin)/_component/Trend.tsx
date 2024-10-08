import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <>
      <Link href={`/search?q=trend`} className={style.container}>
        <div className={style.count}>Trending</div>
        <div className={style.title}>숭아찡</div>
        <div className={style.count}>1,234 posts</div>
      </Link>
    </>
  );
}
