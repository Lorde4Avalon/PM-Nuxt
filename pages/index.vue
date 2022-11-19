<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
})
const router = useRouter()
const userStore = useUserStore()
const { getUserInfo } = useUserForm()

// if (!userStore.authToken) {
//     router.push({ path: '/login' })
// }


function Test() {
    getUserInfo()
}

</script>

<template>
    <div class="font-bold text-4xl w-full text-center">
        index
        <div class="">
            {{ userStore.userInfo?.nickname }}
        </div>
        <button @click="Test">Test</button>
    </div>
</template>