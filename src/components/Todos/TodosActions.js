import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

const TodosActions = ({ resetTodos, deleteCompleted, completedTodosExist }) => {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear"
        onClick={deleteCompleted}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
