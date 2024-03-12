export default async function AboutUs() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    res.json(),
  );

  return (
    <div>
      <h1>About us!</h1>
      <div>{data.id}</div>
      <div>{data.title}</div>
    </div>
  );
}
