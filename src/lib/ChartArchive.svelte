<script>
import { onMount } from 'svelte';
import { createClient } from '@supabase/supabase-js';
import Layout from './Layout.svelte';
import '../styles/main.css';



  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  let chartExamples = [];

  onMount(async () => {
  const { data, error } = await supabase
    .from('chart_examples')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    chartExamples = data.map(example => {
      let links = [];
      try {
        links = typeof example.content_link === 'string'
          ? JSON.parse(example.content_link)
          : example.content_link;
      } catch (e) {
      }

      return {
        ...example,
        parsed_links: links
      };
    })
    .sort((a,b) => a.type.localeCompare(b.type));
  }
});
</script>

<Layout>
  <main class="chart-archive">

    <h1>Chart Archive</h1>

    {#each chartExamples as example, index (example.type)}
      <section>
        <h2>{example.type}</h2>
  
        {#if example.parsed_links.length > 0}
          {#each example.parsed_links as linkAndThumb}
            <div class="api-data">
              <img src={linkAndThumb.thumbnail} alt="img preview" />
              <a href={linkAndThumb.href} target="_blank" rel="noopener noreferrer">
                {linkAndThumb.href}
              </a>
            </div>
          {/each}
        {:else}
          <p class="red">No links found for this chart type.</p>
        {/if}
      </section>
      {#if index < chartExamples.length - 1}
      <hr /> 
    {/if}
  {/each}
  </main>
</Layout>
