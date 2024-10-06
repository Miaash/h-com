import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한글 지원
import ActionButtons from "./ActionButtons";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Post() {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/xlogo.jpg",
    },
    content: "클론코딩도 쉽지 않았다.",
    createdAt: new Date(),
    Images: [],
  };
  return (
    <article className={style.post}>
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
            {/* {target.Images.length > 0 && (
              <div className={style.postImageSection}>
                <img src={target.Images[0]?.link} alt="" />
              </div>
            )} */}
          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
