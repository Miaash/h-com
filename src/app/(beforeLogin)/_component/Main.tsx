import Image from "next/image";
import style from "@/app/(beforeLogin)/_component/main.module.css";
import Link from "next/link";
import zlogo from "../../../../public/zlogo.png";

export default function Main() {
  return (
    <>
      <div className={style.left}>
        <Image src={zlogo} alt="logo" />
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={style.signup}>
          계정만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        {/* 인터셉팅 라우팅 */}
        {/* /i/flow/login 아래 경로는 (.)i로 지정한 인터셉팅라우팅 폴더 경로로 이동하게 된다.  */}
        {/* 인터셉팅 라우팅은 클라이언트에서 라우팅할 때만 적용됨 */}
        {/* 따라서 기존에 i폴더를 없애면 안됨. 브라우저에서 첫화면으로 아래 경로로 들어오게 되면 원래 i폴더 경로실행. */}
        {/* Link태그를 통해서 라우팅할때만 인터셉팅 라우팅이 적용됨 */}
        <Link href="/login" className={style.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
