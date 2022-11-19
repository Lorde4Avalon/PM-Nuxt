<template>
    <div class="form-container sign-up-container bg-white hidden sm:block  sm:w-1/2 absolute h-full">
        <form action="#" class="h-full flex flex-col items-center">
            <h1 class="font-bold text-3xl mt-10">Sign Up</h1>
            <div class="flex flex-col justify-between mt-8 mb-10">
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Username</span>
                </label>
                <input type="text" placeholder="Enter your username" class="input w-full max-w-xs bg-gray-100" />
                
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Password</span>
                </label>
                <input type="text" placeholder="Password" class="input w-full max-w-xs bg-gray-100" />
                
                <label class="label">
                    <span class="label-text-alt text-sm font-semibold">Confirm password</span>
                </label>
                <input type="text" placeholder="Confirm password" class="input w-full max-w-xs bg-gray-100" />
                
                <button class="btn w-full mt-6 btn-info hover:bg-sky-500 text-white">Sign Up</button>
            </div>
        </form>
    </div>
</template>