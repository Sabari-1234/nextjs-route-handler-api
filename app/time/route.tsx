export const dynamic = "force-dynamic";
export const GET = () => {
  return Response.json({ time: new Date().toLocaleTimeString() });
};
