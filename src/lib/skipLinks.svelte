<script>
    // === IMPORTS ================================
    import Hint from '$lib/hint.svelte';
    import Button from '$lib/button.svelte';
    import { keyup } from '$lib/keyup.js';

    // === PROPERTIES =============================
    export let links;

    // === VARIABLES ==============================
    let skiplinks;

    // === EVENT HANDLERS =========================
    function onFocus() {
        skiplinks.focus();
    }
</script>


<svelte:window use:keyup={{s: onFocus}}/>

<section bind:this={skiplinks} id="skiplinks" class="region" tabindex="-1" aria-labelledby="skiplinks__h2">
    <div class="heading">
        <h2 id="skiplinks__h2">Skip Links</h2>
        <Hint key="S" />
    </div>
    
    <ul class="options">
        <li><Button type="link" size="sm" text="Skip to content" link="#mian" /></li>
        {#each links as link}
            <li><Button type="link" size="sm" text={link.text} link={link.link} /></li>
        {/each}
    </ul>
</section>

<style lang="scss">
    
</style>