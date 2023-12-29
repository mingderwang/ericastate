export function Component(props: { message: string }) {
  function handleClick() {
    alert(props.message);
  }
  return (
    <body>
      <h1 style={{ color: "red" }}>{props.message}</h1>
      <button onClick={handleClick}>Say hello</button>
    </body>
  );
}
