<script setup lang="ts">
const userStore = useUserStore()
const { getUserInfo } = useUserForm()

function Test() {
    getUserInfo()
}
</script>

<template>
    <div class="flex bg-white h-full">
        <SideBar />
        <div class="flex flex-col w-full">
            <HeadBar />
            <div class="h-full rounded-t-3xl flex flex-col p-7  bg-page-light">
                Home page
                {{userStore.userInfo?.username}}
                <button @click="() => { navigateTo('/login') }">Login</button>
                <button @click="getUserInfo">GET</button>
            </div>
        </div>
        <DashboardUser />
    </div>
</template>