"use client";

import { useRouter } from "next/navigation";
import style from "./post.module.css";

type PostArticleProps = {
  children: React.ReactNode;
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    content: string;
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <>
      <article className={style.post} onClickCapture={onClick}>
        {children}
      </article>
    </>
  );
}
