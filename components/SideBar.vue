<script setup lang="ts">
const open = ref(true)

const { logout } = useUserForm()

const Menu = [
    { title: "Dashboard", src: "Chart_fill.png" },
    { title: "Inbox", src: "Chat.png" },
    { title: "Accounts", src: "User.png", gap: true },
    { title: "Schedule ", src: "Calendar.png" },
    { title: "Search", src: "Search.png" },
    { title: "Analytics", src: "Chart.png" },
    { title: "Files ", src: "Folder.png", gap: true },
    { title: "Setting", src: "Setting.png" },
    { title: "Logout", src: "", svg: true, gap: true, func: logout }
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
            <li v-for="item in Menu" @click="item.func"
                :class="[item.gap ? 'mt-9' : 'mt-2', 'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4']">
                <img v-if="item.src" :src='`/${item.src}`' alt="item">
                <svg v-if="item.svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h7v2Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5Z" />
                </svg>
                <span :class="[open ? '' : 'hidden', 'origin-left duration-200']">{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>