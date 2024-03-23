<template>
    <header>
            <nav>
                <h1>Spéculat-If</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div>
                <input id="searchbar" type="text" name="searchbar" placeholder="search bar...">
            </div>
        </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
    header {
        color: #f0f0f0;
        background-color: #000;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
    }
    nav h1 {
        margin: 0;
        font-size: 2rem;
    }
    nav {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 1rem;
    }
    nav ul li a {
        text-decoration: none;
    }
    nav ul li a:hover {
        text-decoration: underline;
    }
    input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        color: #000;
    }
    input:focus {
        outline: none;
        border-color: #000;
    }
    
</style>