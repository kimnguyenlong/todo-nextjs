import { InMemoryTodoRepository } from "@/src/repositories/todo.in-memory";
import { GetTodos } from "@/src/use-cases/get-todos";

const todoRepository = new InMemoryTodoRepository();
const getTodosUseCase = new GetTodos(todoRepository);

export { getTodosUseCase };
