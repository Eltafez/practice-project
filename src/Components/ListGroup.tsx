function ListGroup() {
  let items = [
    "Belgium",
    "Germany",
    "France",
    "Japan",
    "Tokyo",
    "The Philippines",
  ];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
