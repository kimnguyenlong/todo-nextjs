import { Todo } from "@/src/entities/todo";

interface TodoRepository {
    create(title: string): Promise<Todo>;
}

export class CreateTodo {
    constructor(private todoRepo: TodoRepository) {}

    async execute(title: string) {
        return this.todoRepo.create(title);
    }
}
