<template>
    <div class="overlay-container overflow-hidden text-white hidden sm:block absolute w-1/2 left-1/2 h-full">
        <div class="overlay h-full flex relative bg-sky-400">
            <div class="overlay-left w-1/2 h-full flex flex-col justify-center items-center">
                <h1 class="font-bold text-3xl mb-6">Welcome Back!</h1>
                <p class="text-center px-5">
                    To keep connected with us please login with your personal info
                </p>
                <slot name="signIn"></slot>
            </div>
            <div class="overlay-right w-1/2 h-full flex flex-col justify-center items-center">
                <h1 class="font-bold text-3xl mb-6">Hello, Friend!</h1>
                <p class="text-center px-5">
                    Enter your personal details and start journey with us
                </p>
                <slot name="signUp"></slot>
            </div>
        </div>
    </div>
</template>
