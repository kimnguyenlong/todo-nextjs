import { getTodos } from "@/app/actions";
import TodoCard from "@/app/_components/ui/todo-card";
import CreateTodo from "@/app/_components/ui/create-todo";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div>
      <CreateTodo />
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
