<script>
    import Layout from './Layout.svelte';
    import '../styles/main.css';
   

let weblink = '';
let selectedTypes = "";

const chartCategories = [
  { label: 'Bubble chart', value: 'bubble' },
  { label: 'Slope chart', value: 'slope' },
  { label: 'Sankey chart', value: 'sankey' },
  { label: 'Paired columns chart', value: 'paired columns' },
  { label: 'Bar chart', value: 'barchart' },
  { label: 'Treemap', value: 'treemap' }
];

function toggleChartType(value) {
  if (selectedTypes.includes(value)) {
    selectedTypes = selectedTypes.filter(type => type !== value);
  } else {
    selectedTypes = [...selectedTypes, value];
  }
}

function handleSubmit() {
  console.log('Submitting:', { weblink, selectedType });
  weblink = '';
  selectedTypes = [];
}
</script>

<Layout>
<main class="contribute">
<h1>Contribute an Example</h1>
<p>If you’ve found a great chart example online, share it here so we can include it in the archive!</p>

<form
  action="https://formspree.io/f/xgvkwwnp"
  method="POST"
>
  <label class="contribute-h3" for="weblink">Add the link to the chart here</label>
  <input
    type="url"
    name="weblink"
    id="weblink"
    bind:value={weblink}
    placeholder="https://example.com/chart"
    required
  />

  <fieldset class="options">
    <legend class="contribute-h3">Select chart type</legend>
    {#each chartCategories as category}
      <label class="checkbox">
        <input
          type="radio"
          name="chartTypes"
          value={category.label}
        />
        {category.label}
      </label>
    {/each}
  </fieldset>

  <button type="submit" class="submit-button">Submit</button>
</form>
</main>
</Layout>

