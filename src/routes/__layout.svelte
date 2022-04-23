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
        padding: var(--pad-edge);
        margin: 0 auto;
    }
</style>