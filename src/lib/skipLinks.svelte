<script>
    // === IMPORTS ================================
    import Hint from '$lib/hint.svelte';
</script>

<section id="skiplinks" class="region" aria-labelledby="skiplinks__h2">
    <div class="heading">
        <h2 id="skiplinks__h2">Skip Links</h2>
        <Hint key="S" />
    </div>
    
    <ul>
        <li></li>
    </ul>
</section>

<style lang="scss">
    #skiplinks {
        width: 100%;
        height: 25rem;

        .heading {
            display: flex;
            flex-flow: row nowrap;
            gap: var(--gap-xs);
        }
    }
</style>