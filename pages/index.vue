<script setup lang="ts">
import { useUserStore } from '../stores'

const router = useRouter()
const userStore = useUserStore()

if (!userStore.isLogin) {
    router.push({ path: '/login' })
}

</script>

<template>
    <div class="font-bold text-4xl w-full text-center">index</div>
</template>