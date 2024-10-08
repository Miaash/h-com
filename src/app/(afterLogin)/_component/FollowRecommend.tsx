import style from "./followRecommend.module.css";
import FollowButton from "./FollowButton";

export default function FollowRecommend() {
  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/xlogo.jpg",
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <FollowButton />
      </div>
    </div>
  );
}
