<script>
    // === PROPERTIES =============================
    export let type = "link";
    export let size = "sm";
    export let text;
    export let link = "#";
    export let target = null;
</script>


{#if type === "link"}
    <a href={link} class="button link {size}" {target}>{text}</a>
{/if}


<style lang="scss">
    .button {
        display: block;
        text-decoration: none;

        color: var(--clr-900);
        background-color: var(--clr-0);
        
        &.sm {
            font-weight: 500;
            font-size: 1.3rem;

            padding: var(--pad-xs) var(--pad-sm);
            border-radius: var(--bradius-sm);
        }
    }
</style>