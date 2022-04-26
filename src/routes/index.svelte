<script>
    // === IMPORTS ================================
    import PageLayout from "./_pageLayout.svelte";
    import SkipLinks from '$lib/skipLinks.svelte';
</script>

<PageLayout>
    <h1 slot="pageHeading">Web Accessibility Starter Guide</h1>

    <SkipLinks slot="sidebar" />

    <main slot="main">
        <div class="region">

        </div>
    </main>
</PageLayout>


<style lang="scss">
    .region {
        height: 50vh;
    }
</style>
