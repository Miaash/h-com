import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한글 지원
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";

dayjs.extend(relativeTime);
// dayjs.locale("ko"); // 한글지원 플러그인 사용

type PostProps = {
  noImage?: boolean;
};

export default function Post({ noImage }: PostProps) {
  const target = {
    postId: 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/xlogo.jpg",
    },
    content: "클론코딩도 쉽지 않았다.",
    createdAt: new Date(),
    Images: [] as any,
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({
      imageId: 1,
      link: faker.image.urlLoremFlickr(),
    });
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
              <span className={style.postDate}>
                {dayjs(target.createdAt).fromNow(true)}
              </span>
            </Link>
            <span className={style.postDate}></span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            {target.Images && target.Images.length > 0 && (
              <Link
                href={`/${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
                className={style.postImageSection}
              >
                <div className={style.postImageSection}>
                  <img src={target.Images[0]?.link} alt="" />
                </div>
              </Link>
            )}
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
