<script setup lang="ts">
import { Project } from '~~/types';

definePageMeta({
    layout: "project",
})
const Columns = ref([
    {
        title: "To Do", tasks: [
            {
                id: 1,
                title: "Add discount code to checkout page",
                date: "Sep 14",
                type: "Feature Request"
            },
            {
                id: 2,
                title: "Provide documentation on integrations",
                date: "Sep 12"
            },
            {
                id: 3,
                title: "Design shopping cart dropdown",
                date: "Sep 9",
                type: "Design"
            },
            {
                id: 4,
                title: "Add discount code to checkout page",
                date: "Sep 14",
                type: "Feature Request"
            },
            {
                id: 5,
                title: "Test checkout flow",
                date: "Sep 15",
                type: "QA"
            }]
    },
    {
        title: "In progress", tasks: [
            {
                id: 6,
                title: "Design shopping cart dropdown",
                date: "Sep 9",
                type: "Design"
            },
            {
                id: 7,
                title: "Add discount code to checkout page",
                date: "Sep 14",
                type: "Feature Request"
            },
            {
                id: 8,
                title: "Provide documentation on integrations",
                date: "Sep 12",
                type: "Backend"
            }
        ]
    },
    {
        title: "Done", tasks: [
            {
                id: 6,
                title: "Design shopping cart dropdown",
                date: "Sep 9",
                type: "Design"
            },
            {
                id: 7,
                title: "Add discount code to checkout page",
                date: "Sep 14",
                type: "Feature Request"
            },
            {
                id: 8,
                title: "Provide documentation on integrations",
                date: "Sep 12",
                type: "Backend"
            }
        ]
    }
])
const drag = ref(false)


const { getProject } = useProjectForm()
const route = useRoute()
const projectId: number = +(route.hash.slice(1))
//Get data
const { data, error, refresh } = await getProject(projectId)
const project: Project = data as any
onBeforeMount(() => refresh())

</script>

<template>
    <div class="w-full">
        <div class="bg-gray-100 flex justify-between py-5 px-7">
            <div class="titles">
                <h1 class="font-semibold text-2xl rounded-lg bg-gray-200 py-2 px-4">
                    Projects
                </h1>
            </div>
        </div>
        <div class="px-5 py-3 m-2">
            <h1 class="text-4xl font-bold">{{ $route.params.name }}</h1>
            <p class="text-xl">{{ project?.projectDescription }}</p>
            <h1 class="text-base">Update At {{ project?.projectUpdatedDate }}</h1>
            <div class="flex py-12">
                <div v-for="column in Columns" :key="column.title"
                    class="bg-gray-100 rounded-lg px-3 py-3 w-full max-w-xs mr-4">
                    <div class="flex justify-between">
                        <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ column.title }}</p>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 512 512">
                            <circle cx="256" cy="256" r="48" fill="currentColor" />
                            <circle cx="416" cy="256" r="48" fill="currentColor" />
                            <circle cx="96" cy="256" r="48" fill="currentColor" />
                        </svg>
                    </div>
                    <draggable @start="drag = true" @end="drag = false" @change="" :list="column.tasks" itemKey="id"
                        :animation="200" ghost-class="ghost-card" group="tasks"
                        class="flex flex-col h-full">
                        <!-- must use element as task -->
                        <template #item="{ element, index }">
                            <DashboardTaskCard :key="index" :task="element" class="mt-3 cursor-move" />
                        </template>
                        <template #footer>
                            <button class="btn border-none text-black hover:bg-gray-300 m-2 mt-3 p-2 bg-gray-200 shadow rounded-lg text-center font-medium">
                                +  Add task
                            </button>
                        </template>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.ghost-card {
    opacity: 0.5;
    background: #F7FAFC;
    border: 1px solid #4299e1;
}
</style>