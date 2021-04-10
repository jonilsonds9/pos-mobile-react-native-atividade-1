import React, { useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import "./styles.css";

const data = [
  { id: 1, text: "Finish Post", done: true },
  { id: 2, text: "Answer Email", done: false }
];

const styles = {
  bodyContainer: {
    padding: "40px"
  },
  titleContainer: {
    textAlign: "left"
  },
  container: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "5px 0"
  },
  scrollable: {
    height: "400px",
    overflowY: "auto",
    overflowX: "hidden"
  }
};

const App = () => {
  const [items, setItems] = useState(data);

  function handleRemoveItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  items.map((item) => (item.onClick = handleRemoveItem));

  return (
    <div style={styles.bodyContainer}>
      <div style={styles.titleContainer}>
        <h1>{"Todo List"}</h1>
      </div>

      <div style={styles.container}>
        <Form />
      </div>

      <div style={styles.scrollable}>
        <ListItem listItems={items} />
      </div>
    </div>
  );
};

export default App;
