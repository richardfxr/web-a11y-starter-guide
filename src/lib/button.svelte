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
        position: relative;
        z-index: 2;

        color: var(--clr-900);
        background-color: var(--clr-elem-bg);

        /* border */
        border: solid var(--clr-elem-border) var(--bwidth-main) ;

        transition: color var(--transition-faster) var(--transition-fn1),
                    background-color var(--transition-faster) var(--transition-fn1),
                    border-color var(--transition-faster) var(--transition-fn1);

        &::after {
            /* after pseudo class for animated box-shadow */
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;

            /* box-shadow (::after) is hidden by default. opacity is used to improve performace */
            box-shadow: var(--box-shadow);
            
            opacity: 0;
            transition: opacity var(--transition-faster) var(--transition-fn1);
        }

        &:hover {
            border-color: var(--clr-accent);

            &::after {
                /* show box-shadow */
                opacity: 1;
            }
        }

        &:focus-visible {
            color: var(--clr-0);
            background-color: var(--clr-accent);
            border-color: var(--clr-accent);

            &::after {
                /* show box-shadow */
                opacity: 1;
            }
        }
        
        &.sm {
            font-weight: 500;
            font-size: 1.3rem;

            padding: calc(var(--pad-xs) - var(--bwidth-main)) calc(var(--pad-sm) - var(--bwidth-main));
            border-radius: var(--bradius-sm);
        }
    }
</style>