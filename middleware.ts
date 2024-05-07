//import { cookies } from 'next/headers';
//import { match } from "assert";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  //return NextResponse.redirect(new URL("/", req.url));

  if (req.nextUrl.pathname == "/profile") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  const res = NextResponse.next();

  const theme = req.cookies.get("theme");
  if (!theme) {
    res.cookies.set("theme", "dark");
  }
  res.headers.set("custom-key", "custom-value");
  return res;
};
// export const config = {
//   matcher: "/profile",
// };
