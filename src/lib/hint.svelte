<script>
    // === PROPERTIES =============================
    export let key;
</script>


<kbd class="hint" aria-label="Shortcut key: {key}">{key}</kbd>


<style lang="scss">
    .hint {
        /* flexbox and centering key */
        display: flex;
        align-items: center;
        padding: 0 var(--pad-xs);

        /* typography */
        font-family: 'Inter';
        font-size: 1.2rem;;
        font-weight: 400;

        /* color and border raidus */
        color: var(--clr-0);
        background-color: var(--clr-900);
        border-radius: var(--bradius-xs);
    }

    // hints hidden
    :global([data-hints="hidden"]) {
        .hint {
            display: none;
        }
    }
</style>