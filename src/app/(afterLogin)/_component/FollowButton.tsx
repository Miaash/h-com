"use client";

import { useRouter } from "next/navigation";
import style from "./followRecommend.module.css";
import { useSession } from "next-auth/react";

export default function FollowButton() {
  const router = useRouter();
  const { data: session } = useSession();
  const onFollow = () => {
    if (!session?.user) router.replace("/login");
  };
  return (
    <>
      <button className={style.followButton} onClick={onFollow}>
        Follow
      </button>
    </>
  );
}
