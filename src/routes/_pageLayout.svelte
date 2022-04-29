<script>
    // === IMPORTS ================================
    import Nav from '$lib/nav.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<slot name="pageHeading"></slot>

<div id="sidebar">
    <slot name="sidebar"></slot>
    <Nav />
</div>


<slot name="main"></slot>

<Footer />


<style lang="scss">
    #sidebar {
        /* absolute position */
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        /* sizing */
        width: var(--sidebar-width);
        height: 100vh;
        padding: var(--gap-md) var(--gap-md);

        /* allow scroll if overflown */
        overflow: auto;

        /* flexbox */
        display: flex;
        flex-flow: column nowrap;
        gap: var(--gap-md);

        transition: margin var(--transition-normal) var(--transition-fn1);
    }

    // left center sidebar
    :global([data-sidebar-dir="left"][data-sidebar-pos="center"]) {
        #sidebar {
            /* assign left margin to center sidebar */
            margin: 0 0 0 var(--sidebar-mar-centered-left);
        }
    }

    // right center sidebar
    :global([data-sidebar-dir="right"][data-sidebar-pos="center"]) {
        #sidebar {
            /* assign right margin to center sidebar */
            margin: 0 0 0 var(--sidebar-mar-centered-right);
        }
    }

    // left edge sidebar
    :global([data-sidebar-dir="left"][data-sidebar-pos="edge"]) {
        #sidebar {
            margin: 0 auto 0 var(--gap-md);
        }
    }

    // right edge sidebar
    :global([data-sidebar-dir="right"][data-sidebar-pos="edge"]) {
        #sidebar {
            margin: 0 var(--gap-md) 0 auto;
        }
    }
</style>