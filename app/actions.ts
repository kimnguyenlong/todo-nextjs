"use server";

import { refresh } from "next/cache";

import {
    createTodoUseCase,
    deleteTodoUseCase,
    getTodosUseCase,
    updateTodoStatusUseCase,
} from "@/src/di";

export async function createTodo(formData: FormData) {
    const title = formData.get("title") as string;
    await createTodoUseCase.execute(title);
    refresh();
}

export async function getTodos() {
    return await getTodosUseCase.execute();
}

export async function updateTodoStatus(formData: FormData) {
    const id = formData.get("id") as string;
    const status = formData.get("status") as string;
    await updateTodoStatusUseCase.execute(id, status);
    refresh();
}

export async function deleteTodo(formData: FormData) {
    const id = formData.get("id") as string;
    await deleteTodoUseCase.execute(id);
    refresh();
}
