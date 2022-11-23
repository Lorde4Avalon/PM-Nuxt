<script setup lang="ts">
import { UserInfo } from '~~/types';
const { getUserInfo } = useUserForm()
const userInfo: UserInfo = useUserStore().userInfo as UserInfo

const CountMenu = [
    { title: 'Total projects', sum: 189, color: 'border-l-dark-purple' },
    { title: 'Completed', sum: 174, color: 'border-l-green-500' },
    { title: 'In progress', sum: 13, color: 'border-l-blue-500' },
    { title: 'Out of schedule', sum: 2, color: 'border-l-red-500' },
]
</script>
<template>
    <div class="hidden xl:block bg-white w-1/5 relative">
        <div class="flex justify-center p-4 gap-x-3">
            <img src="/search.png" class="w-8 p-2 cursor-pointer border-2 rounded-full" alt="search">
            <img src="/notification.png" class="w-8 p-2 cursor-pointer border-2 rounded-full" alt="notification">
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
        <!-- <div class="grid grid-cols-2 grid-rows-2 m-4 gap-3 pb-4 border-b-2 border-b-gray-200">
            <div v-for="item in CountMenu" class="flex flex-col">
                <h3 class="m-2 text-sm text-gray-500">{{ item.title }}</h3>
                <div :class="['pl-2 text-lg font-semibold border-l-4', item.color]">{{ item.sum }}</div>
            </div>
        </div> -->
        <div class="flex m-4 justify-center">
            <div class="w-full text-center bg-gray-100 mt-3 p-1 rounded-2xl">
                <div class="text-xl bg-white rounded-2xl py-3 px-5">
                    <h1 class="font-bold text-lg">Activity Feeds</h1>
                </div>
            </div>
        </div>
    </div>
</template>