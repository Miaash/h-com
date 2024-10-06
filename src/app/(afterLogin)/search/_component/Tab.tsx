"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?q=${searchParams.get("q")}&f=live`);
  };
  const onClickPeople = () => {
    setCurrent("people");
    router.replace(`/search?q=${searchParams.get("q")}&f=user`);
  };
  const onClickMedia = () => {
    setCurrent("media");
    router.replace(`/search?q=${searchParams.get("q")}&f=media`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          Top
          <div className={style.tabIndicator} hidden={current !== "hot"}></div>
        </div>
        <div onClick={onClickNew}>
          Latest
          <div className={style.tabIndicator} hidden={current !== "new"}></div>
        </div>
        <div onClick={onClickPeople}>
          People
          <div
            className={style.tabIndicator}
            hidden={current !== "people"}
          ></div>
        </div>
        <div onClick={onClickMedia}>
          Media
          <div
            className={style.tabIndicator}
            hidden={current !== "media"}
          ></div>
        </div>
      </div>
    </div>
  );
}
