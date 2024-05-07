import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const headers1 = new Headers(req.headers);
  const headerList = headers();
  const theme = req.cookies.get("theme");
  cookies().set("total", "20");
  console.log(theme);
  console.log(cookies().get("total"));
  undefined;
  console.log(headers1.get("authentication"));
  console.log(headerList.get("authentication"));
  console.log(headerList.get("user-agent"));
  return new Response("api sent", {
    headers: {
      "content-type": "text/plain",
      "set-cookie": "theme=dark",
    },
  });
};
