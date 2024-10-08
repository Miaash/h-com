import Main from "@/app/(beforeLogin)/_component/Main";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // server component에서의 로그인 세션 가져오기
  const session = await auth();

  // 로그인 한 유저라면 home으로 이동
  if (session?.user) {
    redirect("/home");
    return null;
  }
  return (
    <>
      <Main />
    </>
  );
}
