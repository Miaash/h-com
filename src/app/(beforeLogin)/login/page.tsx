"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  // client component에서 로그인 세션 가져오기
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  // 이렇게 썻더니 오히려 아래와 같은 에러가 발생! A 컴포넌트를 변경할 때 B 컴포넌트를 업데이트 할 수 없다는 내용
  // 렌더링 중에 setState를 사용할 수 없다는 것이다.
  // 근데 처음에 그런 에러가 발생해서 useEffect로 감싼건데 오히려 이런 에러가 발생하다니...
  // Warning: Cannot update a component (`A`) while rendering a different component (`B`). To locate the bad setState() call inside `B`, follow the stack trace as described in
  // useEffect(() => {
  router.replace("/i/flow/login");
  // }, []);

  return <Main />;
}
