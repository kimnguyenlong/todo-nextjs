import { Todo } from "@/src/entities/todo";

interface TodoRepository {
  findAll(): Promise<Todo[]>;
}

export class GetTodos {
  constructor(private todoRepo: TodoRepository) {}

  async execute() {
    return this.todoRepo.findAll();
  }
}
