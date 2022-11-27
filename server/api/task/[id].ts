export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    const cookie: string = getCookie(event, 'user') || ''
    const authToken: string = JSON.parse(cookie).authToken
    if (event.node.req.method === 'GET') {
        const response: any = await $fetch(`${apiBase}/api/task/get/${event.context.params.id}`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'PUT') {
        const body = await readBody(event)
        const query = getQuery(event)
        const response: any = await $fetch(`${apiBase}/api/task/update/${event.context.params.id}`, {
            method: 'PUT',
            body: body,
            query,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'DELETE') {
        const response: any = await $fetch(`${apiBase}/api/task/delete/${event.context.params.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
});