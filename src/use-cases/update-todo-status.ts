import { Todo } from "@/src/entities/todo";

interface TodoRepository {
    updateStatus(id: string, status: string): Promise<Todo>;
}

export class UpdateTodoStatus {
    constructor(private todoRepo: TodoRepository) {}

    async execute(id: string, status: string) {
        return this.todoRepo.updateStatus(id, status);
    }
}
