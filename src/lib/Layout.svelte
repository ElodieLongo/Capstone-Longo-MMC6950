<script>
  import { push } from 'svelte-spa-router';
  import '../styles/main.css';

  function goHome() {
    push('/');
  }

  function handleMobileNav(event) {
    const value = event.target.value;
    if (value) {
      push(value);
    }
  }
</script>

<div class="layout-wrapper">
<header class="site-header">
  <div
    class="logo"
    on:click={goHome}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goHome()}
  >
    <svg
      viewBox="0 0 192.92 56.57"
      xmlns="http://www.w3.org/2000/svg"
      class="logo-svg"
      aria-label="Charthelper logo"
    >
      <path fill="#0061fc" d="M16.45,33.24c0-4.69,3-7.39,6.41-7.39,1.91,0,3.15.85,4.11,1.73l-.76.9c-.91-.84-1.95-1.49-3.32-1.49-2.87,0-5.08,2.56-5.08,6.25s2.01,6.2,5.06,6.2c1.5,0,2.79-.72,3.76-1.62l.67.91c-1.2,1.07-2.7,1.85-4.48,1.85-3.62,0-6.36-2.7-6.36-7.34Z"/>
      <path fill="#0061fc" d="M54.44,36.86c0-3.12,2.81-4.6,9.05-5.29.04-2.16-.55-4.46-3.31-4.46-1.89,0-3.53.93-4.47,1.65l-.6-.96c.99-.7,2.94-1.82,5.22-1.82,3.32,0,4.45,2.41,4.45,5.41v8.96h-1.09l-.14-1.82h-.06c-1.43,1.16-3.14,2.17-4.98,2.17-2.22,0-4.07-1.21-4.07-3.84ZM63.49,37.33v-4.77c-5.76.67-7.73,2-7.73,4.24,0,2.01,1.36,2.79,2.97,2.79s3.02-.78,4.75-2.26Z"/>
      <path fill="#0061fc" d="M69.04,26.33h1.09l.14,2.62h.06c.95-1.72,2.32-2.97,3.99-2.97.51,0,.93.07,1.39.29l-.29,1.17c-.47-.17-.73-.23-1.27-.23-1.26,0-2.76.96-3.83,3.61v9.54h-1.29v-14.02Z"/>
      <path fill="#0061fc" d="M79.38,36.48v-9.02h-2.19v-1l2.22-.12.16-4.06h1.1v4.06h4.07v1.13h-4.07v9.12c0,1.79.45,3,2.38,3,.52,0,1.25-.22,1.76-.44l.34,1.05c-.81.29-1.71.53-2.29.53-2.69,0-3.48-1.71-3.48-4.22Z"/>
      <path fill="#0061fc" d="M118.04,33.41c0-4.57,2.97-7.39,6.12-7.39,3.32,0,5.37,2.37,5.37,6.49,0,.35-.01.7-.07,1.05h-10.09c.05,3.54,2.12,6.07,5.28,6.07,1.52,0,2.72-.5,3.77-1.24l.53.98c-1.1.69-2.37,1.38-4.42,1.38-3.58,0-6.48-2.75-6.48-7.34ZM128.3,32.5c0-3.58-1.62-5.36-4.14-5.36-2.37,0-4.51,2.01-4.81,5.36h8.95Z"/>
      <path fill="#0061fc" d="M133.03,38.52v-19.13h1.29v19.3c0,.63.26.92.61.92.12,0,.24,0,.53-.06l.22,1.05c-.26.08-.5.15-.93.15-1.13,0-1.71-.69-1.71-2.23Z"/>
      <path fill="#0061fc" d="M139.66,26.37h1.09l.14,1.76h.06c1.37-1.1,3.04-2.11,4.76-2.11,3.76,0,5.61,2.82,5.61,7.16,0,4.76-2.87,7.57-6.18,7.57-1.33,0-2.76-.63-4.22-1.72l.02,2.59v5.13h-1.29v-20.37ZM149.97,33.18c0-3.45-1.23-6.02-4.46-6.02-1.39,0-2.87.82-4.56,2.31v8.32c1.58,1.31,3.07,1.8,4.13,1.8,2.85,0,4.89-2.62,4.89-6.42Z"/>
      <path fill="#0061fc" d="M154.07,33.41c0-4.57,2.97-7.39,6.12-7.39,3.32,0,5.37,2.37,5.37,6.49,0,.35-.01.7-.07,1.05h-10.08c.05,3.54,2.12,6.07,5.28,6.07,1.52,0,2.72-.5,3.77-1.24l.53.98c-1.1.69-2.37,1.38-4.42,1.38-3.58,0-6.48-2.75-6.48-7.34ZM164.34,32.5c0-3.58-1.62-5.36-4.14-5.36-2.37,0-4.52,2.01-4.81,5.36h8.95Z"/>
      <path fill="#0061fc" d="M169.07,26.37h1.09l.14,2.62h.06c.95-1.72,2.32-2.97,3.99-2.97.51,0,.93.06,1.39.29l-.29,1.17c-.47-.17-.73-.23-1.27-.23-1.26,0-2.76.96-3.83,3.61v9.54h-1.29v-14.02Z"/>
      <rect fill="#0061fc" x="97.17" y="10.55" width="4.93" height="30.21"/>
      <rect fill="#0061fc" x="110.16" y="27.54" width="4.93" height="13.22"/>
      <rect fill="#0061fc" x="31.48" y="10.55" width="4.93" height="30.21"/>
      <rect fill="#0061fc" x="44.46" y="27.54" width="4.93" height="13.22"/>
    </svg>
  </div>

  <nav class="main-nav">
    <div class="menu-desktop">
      <a href="/contribute" on:click|preventDefault={() => push('/contribute')}>Contribute</a>
      <a href="/chartarchive" on:click|preventDefault={() => push('/chartarchive')}>Chart Archive</a>
      <a href="/about" on:click|preventDefault={() => push('/about')}>About</a>
    </div>

    <div class="mobile-nav">
      <select on:change={handleMobileNav}>
        <option value="">Menu</option>
        <option value="/chartarchive">Chart archive</option>
        <option value="/contribute">Contribute</option>
        <option value="/about">About</option>
      </select>
      </div>
  </nav>
 
</header>

<main class="page-content">
  <slot />
</main>

<footer class="site-footer">
  <p>© 2025 Charthelper – all rights reserved.</p>
  <div class="social">
    <a href="https://www.facebook.com/elodie.longo/" aria-label="Facebook">
      <i class="bi bi-facebook"></i>
    </a>
    <a href="https://www.instagram.com/elodielongo/" aria-label="Instagram"><i class="bi bi-instagram"><i></a>
  </div>
</footer>
</div>
