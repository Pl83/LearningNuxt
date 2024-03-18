<template>
    <main role="main">
        <TheHeader />
        <slot />
        <TheFooter />
    </main>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layouts/TheHeader.vue'
import TheFooter from '~/components/layouts/TheFooter.vue'
</script>