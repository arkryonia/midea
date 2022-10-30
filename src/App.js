import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync, addTodoAsync, showTodo } from "./features/todoSlice";

export default function App() {
  const todo = useSelector(showTodo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    userId: 69,
    id: 69,
    title: "",
    completed: false
  });

  const addNewTodo = () => {
    dispatch(addTodoAsync(newTodo));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button onClick={addNewTodo}>Add new todo</button>
      {todo.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <button onClick={() => dispatch(getTodoAsync("5"))}>GET TODO</button>
    </div>
  );
}
