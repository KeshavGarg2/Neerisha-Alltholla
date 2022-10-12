import { formatDate } from "./todoapp/date.js";
import {useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user info/bar";
import TodoList from "./todoapp/list";
import CreateTodo from "./todoapp/create_task";

import appReducer from "./redusers";

function App() {
  const initialTodos = [
    {
      title: "Todo #01",
      description: "CSC 436 HW1",
      author: "Sanjaya",
      dateCreated: formatDate(new Date("Sep 27 2022 17:30:00")),
      id: uuidv4(),
    },
    {
      title: "Todo #02",
      description: "CSC 436 HW2",
      author: "Dilshan",
      dateCreated: formatDate(new Date("Oct 04 2022 17:30:00")),
      id: uuidv4(),
    },
  ];



  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <TodoList todos={state.todos} />
      {state.user && (
        <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;