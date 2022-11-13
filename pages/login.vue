<script setup lang="ts">
import SignInForm from '../views/login/SignInForm.vue'
import SignUpForm from '../views/login/SignUpForm.vue'
import OverlayContainer from '../views/login/OverlayContainer.vue'

function activePanel() {
    document.getElementById('container')?.classList.add('right-panel-active')
}

function removePanel() {
    document.getElementById('container')?.classList.remove('right-panel-active')
}

</script>

<template>
    <div class="h-full flex justify-center items-center">
        <div id="container"
            class="w-full h-full sm:h-1/3 sm:w-4/5 lg:w-3/5 lg:h-3/5 flex justify-center relative overflow-hidden bg-white rounded-xl shadow-2xl">
            <SignInForm />
            <SignUpForm />
            <OverlayContainer>
                <template #signIn>
                    <button @click="removePanel"
                        class="btn btn-wide mt-9 rounded-2xl bg-sky-400 hover:border-white hover:bg-sky-500 text-white border-white">
                        SIGN IN
                    </button>
                </template>
                <template #signUp>
                    <button @click="activePanel"
                        class="btn btn-wide mt-9 rounded-2xl bg-sky-400 hover:border-white hover:bg-sky-500 text-white border-white">
                        SIGN UP
                    </button>
                </template>
            </OverlayContainer>
        </div>
    </div>
</template>

<style>
.form-container {
	transition: all 0.6s ease-in-out;
}

.overlay-container {
    transition: all 0.6s ease-in-out;
    z-index: 100;
}

.overlay {
    width: 200%;
    left: -100%;
    transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.sign-in-container {
    z-index: 2;
    left: 0;
    transition: transform 0.6s ease-in-out;
}

.sign-up-container {
    z-index: 1;
    left: 0;
    opacity: 0;
    transition: transform 0.6s ease-in-out;
}

#container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

#container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

#container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

#container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-left {
	transform: translateX(-20%);
    transition: transform 0.6s ease-in-out;
}

#container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

#container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 0;
        z-index: 5;
    }
}
</style>