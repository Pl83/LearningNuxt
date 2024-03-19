<script lang="ts">
    import type { Article } from '~/models/article.model'

    const { findOne } = useStrapi4()
    const route = useRoute()

    const { data: article, pending } = useAsyncData('article', 
    () => findOne<{ data: Article }>(`articles/${route.params.slug}`))
</script>


<template>
    <h1>Oui</h1>
    <pre>{{ article }}</pre>
</template>