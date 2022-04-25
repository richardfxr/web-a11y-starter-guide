<script>
    import PageLayout from "./_pageLayout.svelte";
</script>

<PageLayout>
    <h1 slot="pageHeading">TEST</h1>

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
