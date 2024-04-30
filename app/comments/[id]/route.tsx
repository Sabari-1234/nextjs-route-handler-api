import { comment } from "postcss";
import { comments } from "../data";
import { redirect } from "next/navigation";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((comment) => comment.id == parseInt(params.id));
  return Response.json(comment, { status: 200 });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const index = comments.findIndex(
    (comment) => comment.id == parseInt(params.id)
  );
  comments[index].name = body.name;
  return Response.json(comments[index], { status: 200 });
};

export const DELETE = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex(
    (comment) => comment.id == parseInt(params.id)
  );
  comments.splice(index, 1);
  return Response.json(comments, { status: 200 });
};
