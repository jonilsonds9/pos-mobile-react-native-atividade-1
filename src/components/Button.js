import React from "react";

const styles = {
  button: {
    backgroundColor: "blue",
    border: 0,
    padding: 8,
    float: "right"
  },
  text: {
    color: "#fff"
  }
};

function Button({ id, title, onClick }) {
  function handleClick() {
    if (onClick && id) onClick(id);
  }

  return (
    <button style={styles.button} onClick={handleClick}>
      <span style={styles.text}>{title}</span>
    </button>
  );
}

export default Button;
