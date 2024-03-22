<script setup lang="ts">

    import type { ArticlesResponse } from '~/models/article.model'

   const { find } = useStrapi();

   const { data, pending, error } = await useAsyncData('articles', async () => {
       return await find<ArticlesResponse>('articles', {
            populate: '*'
       }).then(res => res.data);
   });


    const items = [{
    label: 'All Articles',
    key: 'all',
    content: 'This is the content shown for Tab1'
    }, {
    label: 'Funny Articles',
    key: 'fun',
    content: 'And, this is the content for Tab2'
    }, {
    label: 'Dangerous Articles',
    key: 'danger',
    content: 'Finally, this is the content for Tab3'
    }];

    // make search bar functional

    const searchbar = document.getElementById('searchbar') as HTMLInputElement;

    searchbar.addEventListener('input', () => {
        const search = searchbar.value.toLowerCase();
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const title = section.querySelector('a')?.textContent?.toLowerCase() || '';
            if (title.includes(search)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
</script>

<template>
    <h1>Hello World</h1>

    <UTabs :items="items">
        <template #item="{ item }">
            <div v-if="item.key === 'all'" >
                <h1>All Articles</h1>
                <section v-for="article in data" :key="article.slug">
                    <div>
                        <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
                        <hr>
                        <hr>
                    </div>
                </section>
            </div>
            <div v-else-if="item.key === 'fun'">
                <h1>Funny Articles</h1>
                <section v-for="article in data" :key="article.slug">
                    <div v-if="article.tag === 'fun'">
                        <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
                        <hr>
                        <hr>
                    </div>
                </section>
            </div>
            <div v-else-if="item.key === 'danger'">
                <h1>Dangerous Articles</h1>
                <section v-for="article in data" :key="article.slug">
                    <div v-if="article.tag === 'danger'">
                        <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
                        <hr>
                        <hr>
                    </div>
                </section>
            </div>
        </template>
    </UTabs>
</template>

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