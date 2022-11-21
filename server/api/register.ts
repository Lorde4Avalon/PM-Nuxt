export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { apiBase } = runtimeConfig;
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);
        const response: any = await $fetch(`${apiBase}/api/authenticate`, {
            method: 'POST',
            body
        })
        return response
    }
})