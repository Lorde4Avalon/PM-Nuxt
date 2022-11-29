<script setup lang="ts">
import { Project } from '~~/types';

const props = defineProps<{
    project: Project
}>()
const isSelect = ref(false)
function setIsSelect(value: boolean) {
    isSelect.value = value
}

function onClick(project: Project) {
    navigateTo(`/projects/${project.projectName}#${project.projectId}`)
}
</script>

<template>
    <div :class="[isSelect ? 'bg-gray-100' : 'bg-white', 'cursor-pointer card w-72 h-full max-h-56 text-black']"
        @click="setIsSelect(!isSelect)">
        <input type="checkbox" :checked="isSelect"
            :class="[isSelect ? '' : 'hidden', 'projectCheck indicator-item checkbox checkbox-sm']" />
        <div class="card-body">
            <h2 class="card-title">{{ project.projectName }}</h2>
            <p class="overflow-hidden">{{ project.projectDescription }}</p>
            <div class="card-actions justify-end">
                <button class="btn" @click="onClick(project)">Enter Project</button>
            </div>
        </div>
    </div>
</template>