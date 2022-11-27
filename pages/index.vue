<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { Form, Field, ErrorMessage } from 'vee-validate';
import { Project } from '~~/types';
const userStore = useUserStore()
const { getUserInfo } = useUserForm()
const { createProject, getAllProjects } = useProjectForm()

//Get data
const { data, refresh } = await getAllProjects()
onBeforeMount(() => refresh())
const projectsData = data


//Actions
const isOpen = ref(false)
function setIsOpen(value: boolean) {
    isOpen.value = value
}

async function onSubmit(values: Project | any) {
    if (!values.projectName) {
        console.log('project Name empty');
        return
    }
    const response = await createProject(values)
    if (response.error.value) {
        console.error('register error ' + `${response.error.value?.statusMessage}`);
        return
    }
    setIsOpen(false)
    refresh()
}
</script>

<template>
    <div class="flex bg-white">
        <SideBar />
        <div class="flex flex-col w-full">
            <HeadBar>
                <template #addProject>
                    <button @click="setIsOpen(true)"
                        class="btn bg-dark-purple/80 hover:bg-dark-purple rounded-full text-xs">
                        Start a new Project
                    </button>
                </template>
            </HeadBar>
            <div class="h-full rounded-t-3xl p-7 bg-gray-300/80">
                <div class="flex flex-wrap gap-6">
                    <div v-for="project in projectsData?.data" class="indicator">
                        <DashboardProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
        <DashboardUser />
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="setIsOpen(false)" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Start a new Project
                            </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Add basic project info to start a new project
                                </p>
                            </div>
                            <Form @submit="onSubmit" class="mt-2">
                                <label class="label">
                                    <span class="label-text">Project Name</span>
                                </label>
                                <Field name="projectName" type="text" placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs" />

                                <label class="label">
                                    <span class="label-text">Project Desc</span>
                                </label>
                                <Field name="projectDescription" as="textarea"
                                    class="textarea textarea-bordered h-24 w-full max-w-xs"
                                    placeholder="Describe your project"></Field>
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
</template>