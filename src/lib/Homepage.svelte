<script>
    import Layout from './Layout.svelte';
    import { push } from 'svelte-spa-router';
    import '../styles/main.css';

 

    function startQuiz() {
        push('/select');
    }
</script>

<Layout>
    <main class="home">
      <section class="hero">
        <h2>What is the best chart to present your data?</h2>
        <p>If this question sounds challenging, Charthelper is for you.</p>
        
      </section>
  
      <section class="intro">
        <p>
          Charthelper will guide your choice based on data-visualization best practices and a curated archive
          of visualizations from leading industry case studies.
        </p>
        <p>It's effortless.</p>
        <button on:click={startQuiz}>Try it now</button>
      </section>

      
  </main>
</Layout>


    
