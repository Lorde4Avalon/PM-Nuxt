import { Task } from "~~/types"

export default function useTaskForm() {
    const api = useApi()
    const userStore = useUserStore()
    const createTask = async (data: Task, projectId: number) => {
        const res = await api('/api/task', {
            method: 'POST',
            body: data,
            query: {
                projectId
            }
        })
        return res
    }

    const getAllTasks = async (projectId: number) => {
        const res = await api('/api/task', {
            query: {
                projectId
            }
        })
        return res
    }

    const getTask = async (id: number | string) => {
        return await api(`/api/task/${id}`)
    }

    return { createTask, getAllTasks, getTask }
}