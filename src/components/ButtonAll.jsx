import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ clickedAll }) {
  return (
    <div className="container">
      <Button
        style={{ width: "25rem", height: "3rem" }}
        variant="info text-white"
        onClick={clickedAll}
      >
        All
      </Button>
    </div>
  );
}

export default ButtonAll;
