<script>
    import Layout from './Layout.svelte';
    import { push } from 'svelte-spa-router';
    import '../styles/main.css';

    function goToContribute() {
  push('/contribute');
}


</script>

<Layout>
    <main class="home">
      <section class="about">
        <h2>Thank you for trying Charthelper</h2>
        <p class="about-p">Data visualization is essential in the digital age, where we are surrounded by vast amounts of information. As the saying goes, “a picture is worth a thousand words.” Visuals help distill complex data into clear, impactful insights.

            Professionals across fields rely on data visualization to communicate information to non-technical audiences, making it a valuable tool for anyone involved in storytelling, analysis, or decision-making.
            
            Our eyes are naturally drawn to colors and shapes, which makes charts, graphs, and maps far more intuitive than rows of numbers. Visual elements help us grasp trends and patterns at a glance.
            
            Charthelper is a collaborative platform built to support this process. We welcome your contributions through our Contribute page and look forward to building a shared archive of real-world chart examples.</p>
        
     
  
    
        <button class="back-button" on:click={goToContribute}>Contribute</button>
      </section>

      
  </main>
</Layout>


    
