// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";

export async function middleware(request) {
  //   const session = await authClient.api.getSession({
  //     headers: await headers(),
  //   });
  //   console.log(session, "session");

  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__secure-better-auth.session_token");
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/career", "/news/:path*"],
};
