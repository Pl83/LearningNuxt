<script setup lang="ts">
    import type { Article } from '~/models/article.model'

    const { findOne } = useStrapi4()
    const route = useRoute()

    const { data: article, pending } = useAsyncData('article', 
    () => findOne<{ data: Article[] }>(`articles/${route.params.slug}`))
</script>


<template>
    <main>
        <h1>{{ article.data.title }}</h1>
        <br>
        <p>{{ article.data.intro }}</p>
        
        <br>    
        <p>Published At {{ article.data.publishedAt }}</p>
        <!-- <pre>{{ article }}</pre> -->
    </main>
</template>

<style scoped>
    main {
        min-height: calc(100vh - 90px - 250px);
    }
    main h1 {
        font-size: 2rem;
        color: #2F4DDB;
        padding: 1rem;
    }
    main p {
        padding-left: 20%;
        padding-right: 20%;
    }
</style>