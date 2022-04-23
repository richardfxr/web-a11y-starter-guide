<script>
    // imports
    import SkipLinks from '$lib/skipLinks.svelte';
    import Nav from '$lib/nav.svelte';
</script>

<div id="sidebar">
    <SkipLinks />
    <Nav />
</div>

<style lang="scss">
    #sidebar {
        /* absolute position */
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        width: var(--sidebar-width);
        height: 100vh;

        /* allow scroll if overflown */
        overflow: auto;

        background-color: red;
    }

    // left center sidebar
    :global([data-sidebar-dir="left"][data-sidebar-pos="center"]) {
        #sidebar {
            /* assign left margin to center sidebar */
            margin: 0 auto 0 var(--sidebar-pad-centered);
        }
    }

    // right center sidebar
    :global([data-sidebar-dir="right"][data-sidebar-pos="center"]) {
        #sidebar {
            /* assign right margin to center sidebar */
            margin: 0 var(--sidebar-pad-centered) 0 auto;
        }
    }

    // left edge sidebar
    :global([data-sidebar-dir="left"][data-sidebar-pos="edge"]) {
        #sidebar {
            margin: 0 auto 0 var(--pad-edge);
        }
    }

    // right edge sidebar
    :global([data-sidebar-dir="right"][data-sidebar-pos="edge"]) {
        #sidebar {
            margin: 0 var(--pad-edge) 0 auto;
        }
    }
</style>
