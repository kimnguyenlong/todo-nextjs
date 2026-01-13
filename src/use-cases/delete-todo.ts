import { Todo } from "@/src/entities/todo";

interface TodoRepository {
    delete(id: string): Promise<Todo>;
}

export class DeleteTodo {
    constructor(private todoRepo: TodoRepository) {}

    async execute(id: string) {
        return this.todoRepo.delete(id);
    }
}
