import { Project } from "~~/types"

export default function useProjectForm() {
    const userStore = useUserStore()
    const createProject = async (data: Project) => {
        const res = await useApi('/api/project', {
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

    const deleteMultiProjects = async (body: any) => {
        const res = await useApi('/api/project', {
            method: 'DELETE',
            body
        })
        return res
    }

    const inviteUser = async (id: number | string, data: any) => {
        const res = await useApi(`/api/project/${id}`, {
            method: 'POST',
            query: data
        })
        return res;
    }
    return { createProject, getAllProjects, getProject, deleteMultiProjects, inviteUser }
}