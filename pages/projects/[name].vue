<script setup lang="ts">
definePageMeta({
    layout: "project",
})
</script>

<template>
    <div class="flex relative">
        Tasks
        <p>{{$route.params.name}}</p>
    </div>
</template>