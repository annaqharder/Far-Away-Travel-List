import Item from "./Item";

function PackingList({ items, onDeleteItem }) {
  const itemList = items.map((item) => (
    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
  ));

  return (
    <div className="list">
      <ul>{itemList}</ul>
    </div>
  );
}

export default PackingList;
