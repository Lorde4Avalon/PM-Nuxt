import { Project } from "~~/types"

export default function useProjectForm() {
    const userStore = useUserStore()
    const createProject = async (data: Project) => {
        const res = await useApi<any>('/api/project', {
            method: 'POST',
            body: data
        })
        return res
    }

    const getAllProjects = async () => {
        const res = await useApi<Project[]>('/api/project', {
            query: {
                username: userStore.userInfo?.username
            }
        })
        return res
    }

    const getProject = async (id: number | string) => {
        return await useApi<Project>(`/api/project/${id}`)
    }

    return { createProject, getAllProjects, getProject }
}