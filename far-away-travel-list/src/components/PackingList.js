import Item from "./Item";

function PackingList() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  const itemList = initialItems.map((item) => <Item item={item} />);

  return (
    <div className="list">
      <ul>{itemList}</ul>
    </div>
  );
}

export default PackingList;
