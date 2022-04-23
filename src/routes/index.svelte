<script>
    import PageLayout from "./_pageLayout.svelte";
</script>

<PageLayout>
    <h1 slot="pageHeading">TEST</h1>

    <main slot="main">
        <div class="test">

        </div>
    </main>
</PageLayout>


<style lang="scss">
    .test {
        height: 50vh;
        background-color: blue;
    }
</style>
