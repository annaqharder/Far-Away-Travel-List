function Item({ item }) {
  const { description, quantity, packed } = item;

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} x {quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
