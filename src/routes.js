import Home from './lib/Homepage.svelte';
import ChartSelector from './lib/ChartSelector.svelte';
import Contribute from './lib/Contribute.svelte';
import About from './lib/About.svelte';  
import ChartArchive from './lib/ChartArchive.svelte';  


export default {
  '/': Home,
  '/contribute': Contribute,
  '/select': ChartSelector,
  '/about': About,
  '/chartarchive': ChartArchive
};