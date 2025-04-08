<script>
	import Router from 'svelte-spa-router';
	import Homepage from './lib/Homepage.svelte';
	import ChartSelector from './lib/ChartSelector.svelte';
  
	
	const routes = {
		'/': Homepage,
		'/select': ChartSelector
	};
  </script>

  <Router {routes} />

 
  
  
