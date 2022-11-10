<script setup lang="ts">
const route = useRoute()
const title = computed(() => route.meta.title)

useHead({
  titleTemplate: 'Project Manager'
})
</script>

<template>

  <Head>
    <Title>
      {{ title }}
    </Title>
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
