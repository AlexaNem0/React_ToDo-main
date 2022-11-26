import { useState } from "react";
import Button from "../UI/Button";
import styles from "./ToDoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHaandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHaandler}>
        <input
          placeholder="Enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
