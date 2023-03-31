import React from "react";
import { Button } from "react-bootstrap";

function ButtonTodo({ clickedTodo }) {
  return (
    <div className="d-grid gap-2">
      <Button
        style={{ width: "25rem", height: "3rem" }}
        variant="info text-white"
        onClick={clickedTodo}
      >
        Todo
      </Button>
    </div>
  );
}

export default ButtonTodo;
