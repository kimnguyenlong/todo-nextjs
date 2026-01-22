import { Todo, TodoStatus } from "@/src/entities/todo";
import { randomUUID } from "crypto";

export class InMemoryTodoRepository {
    private todos: Todo[] = [];

    constructor() {
        this.todos = [
            {
                id: randomUUID().toString(),
                title: "Sample Todo 1",
                status: TodoStatus.New,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: randomUUID().toString(),
                title: "Sample Todo 2",
                status: TodoStatus.Todo,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
    }

    async create(title: string): Promise<Todo> {
        const todo = {
            id: randomUUID().toString(),
            title,
            status: TodoStatus.New,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.todos.push(todo);
        return todo;
    }

    async findAll(): Promise<Todo[]> {
        return this.todos.sort((a, b) =>
            b.updatedAt.getTime() - a.updatedAt.getTime()
        );
    }

    async updateStatus(id: string, status: TodoStatus): Promise<Todo> {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new Error("Todo not found");
        }
        const updatedAt = new Date();
        const updatedTodo = {
            ...this.todos[index],
            status,
            updatedAt,
        };
        this.todos[index] = updatedTodo;
        return updatedTodo;
    }

    async delete(id: string): Promise<Todo> {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new Error("Todo not found");
        }
        const [deletedTodo] = this.todos.splice(index, 1);
        return deletedTodo;
    }
}
