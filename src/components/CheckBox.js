import React from "react";

function CheckBox({ done }) {
  let checked = "";
  if (done === true) {
    checked = "checked";
  }

  return <input type="checkbox" defaultChecked={checked} />;
}

export default CheckBox;
