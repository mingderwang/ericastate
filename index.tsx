import { renderToReadableStream } from "react-dom/server";

export const element = <h1>Hello, world</h1>;

export function Component(props: { message: string }) {
  return <></>;
}

Bun.serve({
  async fetch() {
    const stream = await renderToReadableStream(
      <Component message="Hello from server!" />
    );
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
