<script>
    import { push } from 'svelte-spa-router';
 

    function startQuiz() {
        push('/select');
    }
</script>

<main class="home">
    <header>
        <h1>Charthelper</h1>
    </header>


    <section class="hero">
        <h2>What is the best chart to present your data?</h2>
        <p>If this question sounds challenging, Charthelper is for you.</p>
        <button on:click={startQuiz}>Try it now</button>
    </section>

    <footer>
        <p>© 2025 Charthelper – all rights reserved.</p>
    </footer>
</main>
