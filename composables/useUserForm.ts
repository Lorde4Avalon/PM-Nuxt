import { UserInfo } from "~~/types"
export default function useUserForm() {
    const userStore = useUserStore()
    
    const login = async (form: any) => {

        const response = await useApi<any>('/api/user', {
            method: 'POST',
            body: form
        })
        userStore.authToken = response.data.value?.data.token
        navigateTo('/')
    }

    const register = async (form: any) => {
        const response = await useApi('/api/user/register', {
            method: 'POST',
            body: form
        })
        return response
    }

    const getUserInfo = async () => {
        const response = await useApi('/api/user')
        userStore.userInfo = response.data.value?.data
    }
    return { login, register, getUserInfo }
}