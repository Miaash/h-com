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

  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);

  return <Main />;
}
