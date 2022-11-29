<script setup lang="ts">
const open = ref(true)
const Menu = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
]
</script>

<template>
    <div :class="[open ? 'w-72' : 'w-20', 'bg-light-dark h-screen p-5  pt-8 relative duration-300']">
        <img src="/control.png"
            :class="[open ? '' : 'rotate-180 opacity-0 hover:opacity-100', 'absolute opacity-1 hover:opacity-1 duration-300 cursor-pointer top-13 -right-4']"
            @click="() => { open = !open }" alt="arrow">
        <div class="flex gap-x-4 items-center">
            <img src="/logo.png" :class="[open ? 'rotate-[180deg]' : '', 'cursor-pointer duration-500']"
                @click="() => { open = !open }" alt="logo">
            <h1 :class="[open ? '' : 'scale-0', 'duration-500 text-white text-xl font-medium']">
                PM
            </h1>
        </div>
        <ul class="pt-6">
            <li v-for="item in Menu"
                :class="[item.gap ? 'mt-9' : 'mt-2', 'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4']">
                <img :src='`/${item.src}.png`' alt="item">
                <span :class="[open ? '' : 'hidden', 'origin-left duration-200']">{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>