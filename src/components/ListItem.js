import React from "react";
import Item from "./Item";

const styles = {
  table: {
    borderCollapse: "collapse",
    width: "100%"
  },
  th: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#dddddd"
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  }
};

function ListItem({ listItems }) {
  let items = [];
  if (listItems) {
    items = listItems;
  }

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{"Done"}</th>
            <th style={styles.th}>{"Task"}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item
              key={item.id}
              text={item.text}
              id={item.id}
              done={item.done}
              onClick={item.onClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListItem;
