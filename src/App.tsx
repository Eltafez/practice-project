import Input from "./Components/Input";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = [""];
  items = [];

  const handleAddedTask = (task: string) => {
    console.log(task);
  };

  return (
    <>
      <Input onAddedTask={handleAddedTask} />
      <ListGroup items={items} />
    </>
  );
}

export default App;
