<script>
    // === IMPORTS ================================
    import Hint from '$lib/hint.svelte';
    import Button from '$lib/button.svelte';
</script>

<nav id="nav" class="region">
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