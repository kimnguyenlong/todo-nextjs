import { getTodos } from "@/app/actions";
import TodoCard from "./_components/ui/todo-card";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <li>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </li>
      </div>
    </div>
  );
}
