import { auth } from "./auth";
import { NextResponse } from "next/server";

// 로그인 세션이 없으면 login페이지로 redirect
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
