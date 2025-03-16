<script>
    import { onMount } from 'svelte';
    import { GoogleCharts } from 'google-charts';
    import * as drawFns from './chartUtils.js';
    import { createClient } from '@supabase/supabase-js';
    export let chartType;

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    let chartContainer;
    let chartData = [];

    onMount(async () => {
      const { data, error } = await supabase
        .from('chart_examples')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        chartData = data;
        console.log(data)
        GoogleCharts.load(drawChart);
      }
    });

    function drawChart() {
      if (!chartContainer) {
        console.error("Chart container not found!");
        return;
      }

      chartContainer.innerHTML = ''; // Clear previous chart

      switch (chartType) {
        case 'overlapping area':
          drawFns.drawAreaChart(chartContainer);
          break;
        case 'bubble':``
          drawFns.drawBubbleChart(chartContainer);
          break;
        case 'donut':
          drawFns.drawDonutChart(chartContainer);
          break;
        case 'stacked':
          drawFns.drawStackedBarChart(chartContainer);
          break;
        // case 'dual axis line chart':
        //   drawFns.drawDualAxisLineChart(chartContainer);
        //   break;
        case 'slope':
          drawFns.drawSlopeChart(chartContainer);
          break;
        case 'sankey':
          drawFns.drawSankeyChart(chartContainer);
          break;
        case 'paired columns':
          drawFns.drawPairedColumnsChart(chartContainer);
          break;
        case 'bar':
          drawFns.drawBarChart(chartContainer);
          break;
        case 'treemap':
          drawFns.drawTreeMap(chartContainer);
          break;
        default:
          console.log("Unknown chart", chartType);
      }
    }
</script>

<div class="chart-wrapper" bind:this={chartContainer}></div>

{#if chartData.length > 0}
  {@const hasAPIData = chartData.find(el => el.type === chartType)}
  {#if hasAPIData}
    <h1> See real-life examples ↓ </h1>
    {#each hasAPIData.content_link as linkAndThumb}
    <div class="api-data">
      <a href={linkAndThumb.href}>{linkAndThumb.href}</a>
      <img src={linkAndThumb.thumbnail} alt="img preview" />
    </div>
    
    <hr />
    {/each}

  {:else}
  <p class="red">Missing API data for this Chart. Data is coming - Stay tuned!</p>
  <p class="red">Right now the API data is available for charts {chartData.map(c => c.type)}.</p>
  {/if}
{/if}


<style>
  .chart-wrapper {
    width: 100%;
    max-width: 800px;
    margin: 2rem auto;
  }

  .red {
    color: red;
  }

  img {
    height: 100px;
    width: 150px;
  }

  .api-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: blanchedalmond;
  }
</style>