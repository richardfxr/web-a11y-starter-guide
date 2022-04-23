<script>
    // imports
    import SideBar from '$lib/sideBar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<SideBar />

<main id="main">
    <slot />
</main>

<Footer />

<style lang="scss">
    #main {
        max-width: var(--max-width);
        width: 100%;
        margin: 0 auto;
    }

    // left sidebar
    :global([data-sidebar-dir="left"]) {
        #main {
            padding: var(--gap-sec) var(--gap-sec) var(--gap-sec) calc(var(--gap-sec) + var(--sidebar-width) + var(--gap-main));
        }
    }
</style>