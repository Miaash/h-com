import style from "./profile.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "../_component/BackButton";

/**
 * [유저페이지]
 * @returns
 */
export default function ProfilePage() {
  const user = {
    id: "soongX2a",
    nickname: "숭아숭",
    image: "/cat.jpg",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>Follow</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
