<template>
    <header>
            <nav>
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
        background-color: #f0f0f0;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
    input:focus {
        outline: none;
        border-color: #000;
    }
    
</style>