export type Todo = {
    id: string;
    title: string;
    status: "new" | "todo" | "pending" | "in-progress" | "completed";
    createdAt: Date;
    updatedAt: Date;
};
