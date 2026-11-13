export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export async function fetchTasks(baseUrl: string): Promise<Task[]> {
    const response = await fetch(`${baseUrl}/api/tasks`);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
}
