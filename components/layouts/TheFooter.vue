<template>
    <footer>
        <div>
            <h3>Information</h3>
            <ol>
                <li>Lorem ipsum dolor sit.</li>
            </ol>
            <ol>
                <li>Dignissimos est dolores culpa!</li>
            </ol>
            <ol>
                <li>Quod molestias odio fuga.</li>
            </ol>
            <ol>
                <li>Quo tempora modi delectus.</li>
            </ol>
        </div>
        <div>
            <h3>Other info</h3>
            <ol>
                <li>Lorem ipsum dolor sit.</li>
            </ol>
            <ol>
                <li>Itaque numquam magni aut.</li>
            </ol>
            <ol>
                <li>Rerum vero accusamus mollitia.</li>
            </ol>
            <ol>
                <li>Molestiae necessitatibus dolorum sint!</li>
            </ol>
        </div>
        <div>
            <p>&copy; 2021</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
    footer {
        color: #f0f0f0;
        background-color: #000;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
        height: 250px;
    }
    footer div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    footer div h3 {
        margin: 0;
    }
    footer div ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    footer div ol li {
        margin: 0;
        cursor: pointer;
    }
    footer div p {
        margin: 0;
    }
    footer div p:last-child {
        font-size: 0.8rem;
    }
    footer div p:last-child::before {
        content: '🚀';
        margin-right: 0.5rem;
    }
    footer div p:last-child::after {
        content: '🚀';
        margin-left: 0.5rem;
    }
    footer div p:last-child::before,
    footer div p:last-child::after {
        font-size: 1.2rem;
    }

</style>