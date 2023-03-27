export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    const cookie: string = getCookie(event, 'user') || ''
    const authToken: string = JSON.parse(cookie).authToken
    if (event.node.req.method === 'POST') {
        const query = getQuery(event);
        const response: any = await $fetch(`${apiBase}/api/project/invite/code`, {
            method: 'POST',
            query,
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
        return response
    }

});