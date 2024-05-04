import { useState } from "react";

interface Props {
  onAddedTask: (task: string) => void;
}

function Input({ onAddedTask }: Props) {
  const [valueInput, setValueInput] = useState("");
  const handleClick = () => {
    onAddedTask(valueInput);
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Task
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default Input;
