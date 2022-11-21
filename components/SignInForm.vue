<script setup lang="ts">
const form = {
    username: 'valon123',
    password: "Zhou2001"
}
const { login, getUserInfo } = useUserForm();

</script>

<template>
    <div class="form-container bg-white sign-in-container w-full sm:w-1/2 absolute h-full">
        <div class="h-full flex flex-col items-center justify-center">
            <h1 class="font-bold text-3xl mt-10">Sign In</h1>
            <div class="flex flex-col mt-8 mb-10">
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Username</span>
                </label>
                <input type="text" placeholder="Enter your username" class="input w-full max-w-xs mb-2 bg-gray-100" />
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Password</span>
                </label>
                <input type="text" placeholder="password" class="input w-full max-w-xs bg-gray-100" />
                <label class="label w-full justify-end">
                    <span class="label-text-alt">Forget password</span>
                </label>
                <button @click="async () => { await login(form); getUserInfo() }"
                    class="btn w-full mt-3 btn-info hover:bg-sky-500 text-white">Sign In</button>
            </div>
        </div>
    </div>
</template>