import { UserInfo } from "~~/types"
export default function useUserForm() {
    const userStore = useUserStore()
    const api = useApi()
    const login = async (form: any) => {

        const response = await api('/api/user', {
            method: 'POST',
            body: form
        })
        userStore.authToken = response.data.value?.token
        navigateTo('/')
    }

    const register = async (form: any) => {
        const response = await api('/api/register', {
            method: 'POST',
            body: form
        })
    }

    const getUserInfo = async () => {
        const response = await api('/api/user')
        userStore.userInfo = response.data.value as any
    }
    return { login, register, getUserInfo }
}