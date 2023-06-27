function Item({ item, onDeleteItem }) {
  const { description, quantity, packed } = item;

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} x {quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
