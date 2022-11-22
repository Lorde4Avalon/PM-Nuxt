<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
const { register } = useUserForm()
function removePanel() {
    document.getElementById('container')?.classList.remove('right-panel-active')
}
async function onSubmit(values: any) {
    delete values.confirmPassword
    const response = await register(values)
    if (response.error.value) {
        console.error('register error ' + `${response.error.value?.statusMessage}`);
        return
    }
    removePanel();
} 
</script>
<template>
    <div class="form-container sign-up-container bg-white hidden sm:block  sm:w-1/2 absolute h-full">
        <Form @submit="onSubmit" class="h-full flex flex-col items-center">
            <h1 class="font-bold text-3xl mt-10">Sign Up</h1>
            <div class="flex flex-col justify-between mt-8 mb-10">
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Username</span>
                </label>
                <Field name="username" type="text" placeholder="Enter your username"
                    class="input w-full max-w-xs bg-gray-100" />

                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Password</span>
                </label>
                <Field name="password" type="password" placeholder="Password"
                    class="input w-full max-w-xs bg-gray-100" />

                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Confirm password</span>
                </label>
                <Field name="confirmPassword" type="password" placeholder="Confirm password"
                    class="input w-full max-w-xs bg-gray-100" />
                <button class="btn w-full mt-6 btn-info hover:bg-sky-500 text-white">Sign Up</button>
            </div>
        </Form>
    </div>
</template>