import { Todo } from "@/src/entities/todo";

export class InMemoryTodoRepository {
    private todos: Todo[] = []; // In-memory storage

    constructor() {
        // Initialize with some dummy data
        this.todos = [
            {
                id: "1",
                title: "Sample Todo 1",
                status: "new",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2",
                title: "Sample Todo 2",
                status: "in-progress",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
    }

    async findAll(): Promise<Todo[]> {
        return this.todos;
    }
}
