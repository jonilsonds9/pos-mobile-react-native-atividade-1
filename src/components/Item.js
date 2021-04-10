import React from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";

const styles = {
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  }
};

function Item({ id, text, done, onClick }) {
  return (
    <tr style={styles.tr}>
      <td style={styles.td}>
        <CheckBox done={done} />
      </td>
      <td style={styles.td}>
        {text}
        <Button title={"Remove"} id={id} onClick={onClick} />
      </td>
    </tr>
  );
}

export default Item;
