import { InMemoryTodoRepository } from "@/src/repositories/todo.in-memory";
import { CreateTodo } from "./use-cases/create-todo";
import { GetTodos } from "@/src/use-cases/get-todos";
import { UpdateTodoStatus } from "@/src/use-cases/update-todo-status";
import { DeleteTodo } from "@/src/use-cases/delete-todo";

const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodo(todoRepository);
const getTodosUseCase = new GetTodos(todoRepository);
const updateTodoStatusUseCase = new UpdateTodoStatus(todoRepository);
const deleteTodoUseCase = new DeleteTodo(todoRepository);

export {
    createTodoUseCase,
    deleteTodoUseCase,
    getTodosUseCase,
    updateTodoStatusUseCase,
};
