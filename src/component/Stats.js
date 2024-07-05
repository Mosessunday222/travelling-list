export default function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        {" "}
        <p>
          <em> start adding something</em>
        </p>
      </div>
    );
  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed);
  const numItemsPacked = itemsPacked.length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got eveything ready to go ✈"
          : `You have ${numItems} items on your list, and you have already packed
        ${numItemsPacked}. You have packed ${percentage}% of all your items.`}
      </em>
    </footer>
  );
}
