export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    const cookie: string = getCookie(event, 'user') || ''
    const authToken: string = JSON.parse(cookie).authToken
    if (event.req.method === 'GET') {
        const response: any = await $fetch(`${apiBase}/api/user/current_user`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.req.method === 'POST') {
        const body = await useBody(event);
        const response: any = await $fetch(`${apiBase}/api/authenticate`, {
            method: 'POST',
            body
        })
        return response
    }
});