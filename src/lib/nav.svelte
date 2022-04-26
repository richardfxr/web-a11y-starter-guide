<script>
    // === IMPORTS ================================
    import Hint from '$lib/hint.svelte';
    import Button from '$lib/button.svelte';
    import { keyup } from '$lib/keyup.js';

    // === VARIABLES ==============================
    let nav;

    // === EVENT HANDLERS =========================
    function onFocus() {
        nav.focus();
    }
</script>


<svelte:window use:keyup={{n: onFocus}}/>

<nav bind:this={nav} id="nav" class="region" tabindex="-1">
    <div class="heading">
        <h2 id="skiplinks__h2">Navigation</h2>
        <Hint key="N" />
    </div>
    
    <ul class="options">
        <li><Button type="link" size="sm" text="Guide" link="#mian" /></li>
        <li><Button type="link" size="sm" text="Settings" link="#mian" /></li>
        <li><Button type="link" size="sm" text="About" link="#mian" /></li>
    </ul>
</nav>

<style lang="scss">

</style>