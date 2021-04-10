import React from "react";
import Button from "./Button";

const styles = {
  div: {
    width: "100%",
    display: "flex"
  },
  input: {
    width: "100%",
    height: 26,
    marginRight: "10px"
  }
};

function Form() {
  return (
    <div style={styles.div}>
      <input style={styles.input} type={"text"} />
      <Button title={"Add"} />
    </div>
  );
}

export default Form;
