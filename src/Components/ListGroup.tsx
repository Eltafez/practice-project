import { useState } from "react";

interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={index.toString()}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
              />
              <label className="form-check-label" htmlFor={index.toString()}>
                {checked ? <del>{item}</del> : item}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
