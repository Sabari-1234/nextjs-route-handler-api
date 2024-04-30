import { comments } from "./data";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) =>
        comment.name.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  return Response.json(filteredComments);
};

export const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    name: comment.name,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
};
