import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const itemList = items.map((item) => (
    <Item
      item={item}
      key={item.id}
      onDeleteItem={onDeleteItem}
      onToggleItem={onToggleItem}
    />
  ));

  return (
    <div className="list">
      <ul>{itemList}</ul>
    </div>
  );
}

export default PackingList;
