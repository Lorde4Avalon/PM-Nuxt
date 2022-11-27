<script setup lang="ts">
import { Project, Task } from '~~/types';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { Form, Field, ErrorMessage } from 'vee-validate';
definePageMeta({
    layout: "project",
})

//Get data
const { getProject } = useProjectForm()
const { createTask, getAllTasks, updateTask} = useTaskForm()
const route = useRoute()
const projectId: number = +(route.hash.slice(1))
const { data: projectData, refresh: projectRefresh } = await getProject(projectId)
const { data: taskData, refresh: taskRefresh } = await getAllTasks(projectId)

//Actions
const isOpen = ref(false)
function setIsOpen(value: boolean) {
    isOpen.value = value
}
const isTaskOpen = ref(false)
function setIsTaskOpen(value: boolean) {
    isTaskOpen.value = value
}
const taskColumns = computed(() => [
    {
        title: "To Do", tasks: taskData.value?.data?.filter(task => task.status == "Todo") || []
    },
    {
        title: "In progress", tasks: taskData.value?.data?.filter(task => task.status == "Inprogress") || []
    },
    {
        title: "Done", tasks: taskData.value?.data?.filter(task => task.status == "Done") || []
    }
])
const drag = ref(false)

// func
onBeforeMount(() => taskRefresh())
const dateTime = reactive({
    startTime: null,
    endTime: null
})
const selectTask = ref<Task>({
    taskName: '',
    status: ''
})
function showTask(element: Task) {
    selectTask.value = element
    setIsTaskOpen(true)
}

async function onSubmit(values: Task | any) {
    values['status'] = 'Todo'
    values['startTime'] = dateTime.startTime
    values['endTime'] = dateTime.endTime
    const { data, error } = await createTask(values, projectId);
    if (error.value) {
        console.log(error.value);
        return
    }
    taskRefresh()
    setIsOpen(false)
}

async function onUpdateSubmit(values: Task | any) {
    const { data, error } = await updateTask(values, projectId, selectTask.value.taskId)
    console.log(data);
}   

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
            <div class="flex justify-between items-center w-full max-w-6xl">
                <div>
                    <h1 class="text-4xl font-bold">{{ $route.params.name }}</h1>
                    <p class="text-xl">{{ projectData?.data?.projectDescription }}</p>
                    <h1 class="text-base">Update At {{ projectData?.data?.projectUpdatedDate }}</h1>
                </div>
                <button @click="setIsOpen(true)"
                    class="btn border-none w-40 text-white bg-dark-purple/90 hover:bg-dark-purple m-2 mt-3 p-2 shadow rounded-lg text-center font-medium">
                    <span class="font-bold text-2xl mr-2">+</span> Add a new task
                </button>
            </div>
            <div class="flex py-8">
                <div v-for="column in taskColumns" :key="column.title"
                    class="bg-gray-100 rounded-lg px-3 py-3 w-full max-w-sm mr-4">
                    <div class="flex justify-between">
                        <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ column.title }}</p>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 512 512">
                            <circle cx="256" cy="256" r="48" fill="currentColor" />
                            <circle cx="416" cy="256" r="48" fill="currentColor" />
                            <circle cx="96" cy="256" r="48" fill="currentColor" />
                        </svg>
                    </div>
                    <draggable @start="drag = true" @end="drag = false" :list="column.tasks" itemKey="id"
                        :animation="200" ghost-class="ghost-card" group="tasks" class="flex flex-col h-full">
                        <!-- must use element as task -->
                        <template #item="{ element, index }">
                            <DashboardTaskCard @click="showTask(element)" :key="index" :task="element"
                                class="mt-3 cursor-move" />
                        </template>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="setIsOpen(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25"></div>
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Add a new Task
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Add basic Task info to start a new Task
                                </p>
                            </div>
                            <Form @submit="onSubmit" class="mt-2">
                                <label class="label">
                                    <span class="label-text">Task Name</span>
                                </label>
                                <Field name="taskName" type="text" placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs" />
                                <!-- date picker -->
                                <label class="label">
                                    <span class="label-text">Task Schedule</span>
                                </label>
                                <div class="flex items-center">
                                    <div class="relative">
                                        <div
                                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        </div>
                                        <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ss" label="startTime"
                                            formatted="YYYY-MM-DD HH:mm:ss" :autoClose="true"
                                            v-model="dateTime.startTime" />
                                    </div>
                                    <span class="mx-4 text-gray-500">to</span>
                                    <div class="relative">
                                        <div
                                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        </div>
                                        <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ss" label="endTime"
                                            formatted="YYYY-MM-DD HH:mm:ss" :autoClose="true"
                                            v-model="dateTime.endTime" />
                                    </div>
                                </div>
                                <label class="label">
                                    <span class="label-text">Task Desc</span>
                                </label>
                                <Field name="description" as="textarea"
                                    class="textarea textarea-bordered h-24 w-full max-w-xs"
                                    placeholder="Describe your Task"></Field>
                                <div class="flex mt-4 gap-x-4">
                                    <button type="button"
                                        class="btn inline-flex justify-center rounded-full border-none bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="setIsOpen(false)">
                                        Cancel
                                    </button>
                                    <button
                                        class="btn inline-flex justify-center rounded-full border-none bg-dark-purple/90 hover:bg-dark-purple px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                        Add Project
                                    </button>
                                </div>
                            </Form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <TransitionRoot appear :show="isTaskOpen" as="template">
        <Dialog as="div" @close="setIsTaskOpen(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25"></div>
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Update Task Info
                            </DialogTitle>
                            <Form @submit="onUpdateSubmit" class="mt-2">
                                <label class="label">
                                    <span class="label-text">Task Name</span>
                                </label>
                                <Field name="taskName" type="text" :value="selectTask.taskName" placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs" />
                                <!-- date picker -->
                                <label class="label">
                                    <span class="label-text">Task Schedule</span>
                                </label>
                                <div class="flex items-center">
                                    <div class="relative">
                                        <div
                                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        </div>
                                        <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ss" label="startTime"
                                            formatted="YYYY-MM-DD HH:mm:ss" :autoClose="true"
                                            :value="selectTask.startTime" v-model="dateTime.startTime" />
                                    </div>
                                    <span class="mx-4 text-gray-500">to</span>
                                    <div class="relative">
                                        <div
                                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        </div>
                                        <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ss" label="endTime"
                                            formatted="YYYY-MM-DD HH:mm:ss" :autoClose="true"
                                            :value="selectTask.endTime" v-model="dateTime.endTime" />
                                    </div>
                                </div>
                                <label class="label">
                                    <span class="label-text">Task Desc</span>
                                </label>
                                <Field name="description" as="textarea" :value="selectTask.description"
                                    class="textarea textarea-bordered h-24 w-full max-w-xs"
                                    placeholder="Describe your Task"></Field>
                                <div class="flex mt-4 gap-x-4">
                                    <button type="button"
                                        class="btn inline-flex justify-center rounded-full border-none bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="setIsTaskOpen(false)">
                                        Cancel
                                    </button>
                                    <button
                                        class="btn inline-flex justify-center rounded-full border-none bg-dark-purple/90 hover:bg-dark-purple px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                        Update Project
                                    </button>
                                </div>
                            </Form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<style>
.ghost-card {
    opacity: 0.5;
    background: #F7FAFC;
    border: 1px solid #4299e1;
}
</style>