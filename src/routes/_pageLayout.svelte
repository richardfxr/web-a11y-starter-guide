<script>
    // imports
    import SideBar from '$lib/sideBar.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<slot name="pageHeading"></slot>

<SideBar />


<slot name="main"></slot>

<Footer />