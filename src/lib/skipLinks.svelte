<script>
    // === IMPORTS ================================
    import Hint from '$lib/hint.svelte';
    import Button from '$lib/button.svelte';
</script>

<section id="skiplinks" class="region" aria-labelledby="skiplinks__h2">
    <div class="heading">
        <h2 id="skiplinks__h2">Skip Links</h2>
        <Hint key="S" />
    </div>
    
    <ul class="options">
        <li><Button type="link" size="sm" text="Skip to content" link="#mian" /></li>
        <li><Button type="link" size="sm" text="Skip to introduction" link="#mian" /></li>
        <li><Button type="link" size="sm" text="Skip to quick settings" link="#mian" /></li>
    </ul>
</section>

<style lang="scss">
    
</style>