"use server";

import { getTodosUseCase } from "@/src/di";

export async function getTodos() {
    return await getTodosUseCase.execute();
}
