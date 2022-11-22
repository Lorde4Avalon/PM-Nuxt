import { Project } from "~~/types"

export default function useProjectForm() {
    const api = useApi()

    const createProject = async (data: Project) => {
        const res = await api('/api/project', {
            method: 'POST',
            body: data
        })
        console.log(res);
    }
}