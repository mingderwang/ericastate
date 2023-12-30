import type { APIRoute } from "astro";

export const GET: APIRoute = (ctx) => {
  return new Response(
    JSON.stringify({
      message: "You're logged in!",
      ctx: JSON.stringify(ctx)
    }),
    { status: 200 }
  );
};
