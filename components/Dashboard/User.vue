<script setup lang="ts">
import { UserInfo } from '~~/types';
const { getUserInfo } = useUserForm()
const userInfo: UserInfo = useUserStore().userInfo as UserInfo
</script>
<template>
    <div class="hidden xl:block bg-white w-1/5 relative">
        <div class="flex justify-center p-4 gap-x-3">
            <img src="/search.png" class="w-8 p-2 border-2 rounded-full" alt="search">
            <img src="/notification.png" class="w-8 p-2 border-2 rounded-full" alt="notification">
        </div>
        <div class="flex h-32 m-4 items-center justify-between border-b-2 border-b-gray-200">
            <div class="w-20 text-lg">
                <h1>Hello,</h1>
                <h1 class="font-bold">{{ userInfo?.nickname }}</h1>
            </div>
            <div class="avatar">
                <div class="w-20 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="avatar">
                </div>
            </div>
        </div>
        <div class="flex h-full m-4">
            <div class="text-xl mt-5">
                <h1>Activity</h1>
                <h1 class="font-bold">Feed</h1>
            </div>
            
        </div>
    </div>
</template>