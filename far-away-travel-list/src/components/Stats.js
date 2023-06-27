function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items to your packing list!</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You've packed everything! Ready to go ✈️"
          : `You have ${numItems} items on your list: You have packed ${numPacked}
        items (${percentagePacked}%)`}
      </em>
    </footer>
  );
}

export default Stats;
