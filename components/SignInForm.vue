<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
const { login, getUserInfo } = useUserForm();

async function onSubmit(values: any) {
    await login(values)
    getUserInfo()
} 
</script>

<template>
    <div class="form-container bg-white sign-in-container w-full sm:w-1/2 absolute h-full">
        <Form @submit="onSubmit" class="h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-3xl mt-10">Sign In</h1>
            <div class="flex flex-col mt-8 mb-10">
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Username</span>
                </label>
                <Field name="username" type="text" placeholder="Enter your username"
                    class="input w-full max-w-xs mb-2 bg-gray-100" />
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Password</span>
                </label>
                <Field name="password" type="password" placeholder="password"
                    class="input w-full max-w-xs bg-gray-100" />
                <label class="label w-full justify-end">
                    <span class="label-text-alt">Forget password</span>
                </label>
                <button class="btn w-full mt-3 btn-info hover:bg-sky-500 text-white">Sign In</button>
            </div>
        </Form>
    </div>
</template>