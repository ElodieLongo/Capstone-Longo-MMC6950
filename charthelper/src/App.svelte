<script>
	import ChartSelector from './lib/components/ChartSelector.svelte';
  </script>
  
  <main>
	<div class="container">
	  <h1>Chart Selection Tool</h1>
	  <ChartSelector />
	</div>
  </main>
  
  <style>
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 2rem;
	}
  
	h1 {
	  color: #333;
	  text-align: center;
	  margin-bottom: 2rem;
	}
  
	:global(body) {
	  margin: 0;
	  padding: 0;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
  </style>