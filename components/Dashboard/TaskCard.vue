<script setup lang="ts">
import { Task } from '~~/types';

const props = defineProps<{
    task: Task
}>()
</script>

<template>
    <div class="!cursor-pointer bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
        <div class="flex justify-between">
            <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ task?.taskName }}</p>
            <img class="w-6 h-6 rounded-full ml-3"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="Avatar">
        </div>
        <div class="flex mt-4 justify-between items-center">
            <span class="text-sm text-gray-600">{{task.endTime}}</span>
        </div>
    </div>
</template>