import Home from './lib/Homepage.svelte';
import ChartSelector from './lib/ChartSelector.svelte';
import Contribute from './lib/Contribute.svelte'; 


export default {
  '/': Home,
  '/contribute': Contribute,
  '/select': ChartSelector
};