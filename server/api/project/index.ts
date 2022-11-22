export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    if (event.node.req.method === 'GET') {
        const cookie: string = getCookie(event, 'user') || ''
        const authToken: string = JSON.parse(cookie).authToken
        const response: any = await $fetch(`${apiBase}/api/project/all`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const response: any = await $fetch(`${apiBase}/api/project/create`, {
            method: 'POST',
            body
        })
        return response
    }
});