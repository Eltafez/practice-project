import Input from "./Components/Input";
import ListGroup from "./Components/ListGroup";
import { useState } from "react";

function App() {
  const [newTasks, setNewTasks] = useState([] as string[]);

  const handleAddedTask = (task: string) => {
    setNewTasks([...newTasks, task]);
  };

  return (
    <>
      <Input onAddedTask={handleAddedTask} />
      <h1>To-do List</h1>
      <ListGroup items={newTasks} />
    </>
  );
}

export default App;
