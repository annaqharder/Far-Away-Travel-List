function Item({ item }) {
  const { id, description, quantity, packed } = item;

  return <li>{description}</li>;
}

export default Item;
