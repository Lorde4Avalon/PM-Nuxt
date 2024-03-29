export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    const cookie: string = getCookie(event, 'user') || ''
    const authToken: string = JSON.parse(cookie).authToken
    if (event.node.req.method === 'GET') {
        const response: any = await $fetch(`${apiBase}/api/project/get/${event.context.params.id}`, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'POST') {
        // const body = await readBody(event)
        const query = getQuery(event)
        const response: any = await $fetch(`${apiBase}/api/project/invite/${event.context.params.id}`, {
            method: 'POST',
            // body: body,
            query: query,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'PUT') {
        const body = await readBody(event)
        const response: any = await $fetch(`${apiBase}/api/project/update/${event.context.params.id}`, {
            method: 'PUT',
            body: body,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }
    if (event.node.req.method === 'DELETE') {
        const query = getQuery(event)
        if (query.username) {
            await $fetch(`${apiBase}/api/project/invite/${event.context.params.id}`, {
                method: 'DELETE',
                query: query,
                headers: {
                    Authorization: 'Bearer ' + authToken
                }
            })
        } else {
            await $fetch(`${apiBase}/api/project/delete/${event.context.params.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + authToken
                }
            })
        }
    }
});