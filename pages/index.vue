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

    onMounted(() => {
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
    });
    
</script>

<template>
<main>
    <header>
        <h1>Welcome to Spéculat-If</h1>
        <p>Here you can find all our articles. You can also sort them by categorys.</p>
    </header>

    <UTabs :items="items">
        <template #item="{ item }">
            <div v-if="item.key === 'all'" >
                
                <h2>All Articles</h2>
                <section v-for="article in data" :key="article.slug">
                    <div>
                        <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
                        <hr>
                        <hr>
                    </div>
                </section>
            </div>
            <div v-else-if="item.key === 'fun'">
                <h2>Funny Articles</h2>
                <section v-for="article in data" :key="article.slug">
                    <div v-if="article.tag === 'fun'">
                        <a :href="`/articles/${article.slug}`">{{ article.title }}</a>
                        <hr>
                        <hr>
                    </div>
                </section>
            </div>
            <div v-else-if="item.key === 'danger'">
                <h2>Dangerous Articles</h2>
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
</main>
</template>



<style scoped>
    main {
        min-height: calc(100vh - 90px - 250px);
    }
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
    }
    h1 {
        color: #2F4DDB;
        font-size: 2rem;
        margin: 0;
    }
    h2 {
        color: #2F4DDB;
        font-size: 1.5rem;
        margin: 0;
        padding-bottom: 20px;
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