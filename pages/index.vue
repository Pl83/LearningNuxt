<script setup lang="ts">

    import type { ArticlesResponse } from '~/models/article.model'

   const { find } = useStrapi()

   const { data, pending, error } = await useAsyncData('articles', async () => {
       return await find<ArticlesResponse>('articles', {
            populate: '*'
       })
   })

</script>

<template>
    <h1>Hello World</h1>
    <pre>{{ data }}</pre>
</template>

<style scoped></style>