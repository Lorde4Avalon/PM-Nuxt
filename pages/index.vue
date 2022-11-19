<script setup lang="ts">
const userStore = useUserStore()
const { getUserInfo } = useUserForm()

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