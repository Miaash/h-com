import style from "@/app/(afterLogin)/layout.module.css";
import Image from "next/image";
import Link from "next/link";
import hlogo from "../../../public/hlogo.png";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link href="/home" className={style.logo}>
              <div className={style.logoPill}>
                <Image src={hlogo} alt="logo" width={25} height={25} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            {/* explore일때 없어질 부분 */}
            <RightSearchZone />
            {/* explore일때 없어질 부분 */}
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>Who to follow</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
