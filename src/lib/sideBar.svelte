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
        // absolute position
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        
        width: var(--sidebar-width);
        margin-left: var(--sidenav-pad-centered);

        background-color: red;
        height: 100vh;
    }
</style>
