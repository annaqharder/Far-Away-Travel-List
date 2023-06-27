import Item from "./Item";

function PackingList({ items }) {
  const itemList = items.map((item) => <Item item={item} key={item.id} />);

  return (
    <div className="list">
      <ul>{itemList}</ul>
    </div>
  );
}

export default PackingList;
