import { Project } from "~~/types"

export default function useProjectForm() {
    const api = useApi()
    const userStore = useUserStore()
    const createProject = async (data: Project) => {
        const res = await api('/api/project', {
            method: 'POST',
            body: data
        })
        return res
    }

    const getAllProjects = async () => {
        const res = await api('/api/project', {
            query: {
                username: userStore.userInfo?.username
            }
        })
        return res
    }

    const getProject = async (id: number | string) => {
        return await api(`/api/project/${id}`)
    }

    return { createProject, getAllProjects, getProject }
}