import style from "@/app/(beforeLogin)/_component/main.module.css";

type BeforeLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

// Before Login Layout
// 로그인, 회원가입 페이지와 페러렐모달창을 받는다.
export default function BeforeLayout({ children, modal }: BeforeLayoutProps) {
  return (
    <div className={style.container}>
      {children}
      {/* 페러렐 라우팅 */}
      {/* 아래 modal에는 @modal로 적어둔 파일인 페러렐모달창을 받는다. */}
      {modal}
    </div>
  );
}
