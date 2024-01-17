import { Button, TextField, Card } from "@/components";
import Link from "next/link";
import styles from "@/styles/pages/Home.module.css";
import { useState } from "react";

export default function Home() {
  const input1 = document.getElementById("input");
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=" + input1.value
    );
    const data = await response.json();
    console.log(response);
    setTodos(data);
  }

  return (
    <div className="p-5">
      <h1 className={"text-green-500 text-xl"}>Hello</h1>
      {todos.map((todo) => {
        return (
          <div className="card">
            <h1 className="text-2xl">Title: {todo.title}</h1>
            <p>Completed: {todo.completed}</p>
          </div>
        );
      })}
      <input className="flex border rounded w-20" id="input"></input>
      <button onClick={getTodos} className={"border-2 p-2 rounded"}>
        Get todos
      </button>
    </div>
  );
}
