export const TypeTernaria = ({ todoList }: { todoList: string[] }) => {
  return (
    <div>{todoList.length > 0 ? <h1>HI</h1> : <h2>no hay valores</h2>}</div>
  );
};
