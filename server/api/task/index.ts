export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    const cookie: string = getCookie(event, 'user') || ''
    const authToken: string = JSON.parse(cookie).authToken
    if (event.node.req.method === 'GET') {
        const query = getQuery(event)
        const response: any = await $fetch(`${apiBase}/api/task/get/all`, {
            query,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const query = getQuery(event);
        const response: any = await $fetch(`${apiBase}/api/task/create`, {
            method: 'POST',
            body,
            query,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
});