import { Task } from "~~/types"

export default function useTaskForm() {
    const userStore = useUserStore()
    const createTask = async (data: Task, projectId: number) => {
        const res = await useApi('/api/task', {
            method: 'POST',
            body: data,
            key: 'createTask',
            query: {
                projectId
            }
        })
        return res
    }

    const updateTask = async (data: Task, projectId: number, id: number | string | undefined) => {
        return await useApi(`/api/task/${id}`, {
            method: 'PUT',
            body: data,
            query: {
                projectId
            }
        })
    }

    const getAllTasks = async (projectId: number) => {
        const res = await useApi<Task[]>('/api/task', {
            query: {
                projectId
            }
        })
        return res
    }

    const getTask = async (id: number | string) => {
        return await useApi<Task>(`/api/task/${id}`,{
            key: `getTask#${id}`
        })
    }

    return { createTask, updateTask, getAllTasks, getTask }
}