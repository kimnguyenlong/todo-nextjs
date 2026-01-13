export type Todo = {
    id: string;
    title: string;
    status: TodoStatus;
    createdAt: Date;
    updatedAt: Date;
};

export enum TodoStatus {
    New = "new",
    Todo = "todo",
    InProgress = "in-progress",
    Completed = "completed",
}

export function getNextTodoStatus(status: TodoStatus): TodoStatus {
    switch (status) {
        case TodoStatus.New:
            return TodoStatus.Todo;
        case TodoStatus.Todo:
            return TodoStatus.InProgress;
        case TodoStatus.InProgress:
            return TodoStatus.Completed;
        case TodoStatus.Completed:
            return TodoStatus.New;
        default:
            return TodoStatus.New;
    }
}

export function getPrevTodoStatus(status: TodoStatus): TodoStatus {
    switch (status) {
        case TodoStatus.New:
            return TodoStatus.New;
        case TodoStatus.Todo:
            return TodoStatus.New;
        case TodoStatus.InProgress:
            return TodoStatus.Todo;
        case TodoStatus.Completed:
            return TodoStatus.InProgress;
        default:
            return TodoStatus.New;
    }
}
