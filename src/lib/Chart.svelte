<script>
  import { onMount } from 'svelte';
  import * as drawFns from './chartUtils.js';
  import { createClient } from '@supabase/supabase-js';
  
  export let chartType;
  
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  let chartContainer;
  let chartData = [];
  
  onMount(async () => {
    console.log("Chart.svelte onMount called");
    const { data, error } = await supabase
      .from('chart_examples')
      .select('*');
      
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      chartData = data;
      console.log("Data fetched:", data);
      drawChart();
    }
  });
  
  async function drawChart() {
    console.log("drawChart called");
    
    if (!chartContainer) {
      console.error("Chart container not found!");
      return;
    }
    
    console.log("Chart container:", chartContainer);
    console.log("Chart type:", chartType);
    chartContainer.innerHTML = ''; // Clear previous chart
    
    try {
      switch (chartType) {
        case 'dualaxis':
          await drawFns.drawDualAxisLineChart(chartContainer);
          break;
        case 'bubble':
          await drawFns.drawBubbleChart(chartContainer);
          break;
        case 'donut':
          await drawFns.drawDonutChart(chartContainer);
          break; 
        case 'stacked':
          await drawFns.drawStackedBarChart(chartContainer);
          break;
        case 'slope':
          await drawFns.drawSlopeChart(chartContainer);
          break;
        case 'sankey':
          await drawFns.drawSankeyChart(chartContainer);
          break;
        case 'paired columns':
          await drawFns.drawPairedColumnsChart(chartContainer);
          break;
        case 'barchart':
          await drawFns.drawBarChart(chartContainer);
          break;
        case 'treemap':
          await drawFns.drawTreeMap(chartContainer);
          break;
        default:
          console.log("Unknown", chartType);
      }
    } catch (error) {
      console.error("Error drawing chart:", error);
    }
  }
  
  $: if (chartType && chartContainer) {
    drawChart();
  }
</script>

<div class="chart-wrapper" bind:this={chartContainer}></div>
{#if chartData.length > 0}
  {@const hasAPIData = chartData.find(el => el.type === chartType)}
  {#if hasAPIData}
    <h2> See real-life examples<br> ↓ </h2>
    {#each hasAPIData.content_link as linkAndThumb}
      <div class="api-data">
        <img src={linkAndThumb.thumbnail} alt="img preview" />
        <a href={linkAndThumb.href}>{linkAndThumb.href}</a>
      </div>
      <hr />
    {/each}
  {:else}
    <p class="red">Missing API data for this Chart. Data is coming - Stay tuned!</p>
    <p class="red">Right now the API data is available for charts {chartData.map(c => c.type)}.</p>
  {/if}
{/if}

