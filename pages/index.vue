<script setup lang="ts">

    import type { ArticlesResponse } from '~/models/article.model'

   const { find } = useStrapi()

   const { data, pending, error } = await useAsyncData('articles', async () => {
       return await find<ArticlesResponse>('articles', {
            populate: '*'
       }).then(res => res.data)
   })

</script>

<template>
    <h1>Hello World</h1>
    <!-- <pre>{{ data }}</pre> -->
    <section>
        <a :href="`/articles/${article.slug}`" v-for="article in data" :key="article.slug">{{ article.title }}</a>
    </section>
</template>&

<style scoped>
    h1 {
        color: red;
    }
    section {
        display: flex;
        flex-direction: column;
    }
    a {
        margin: 10px 0;
    }

    a:hover {
        text-decoration: underline;
    }
</style>