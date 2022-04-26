<script>
    // === IMPORTS ================================
    import PageLayout from "./_pageLayout.svelte";
    import SkipLinks from '$lib/skipLinks.svelte';
    import Hint from '$lib/hint.svelte';
    import { keyup } from '$lib/keyup.js';
    import { sidebarDir, sidebarPos } from '../store/store.js';

    // === VARIABLES ==============================
    let links = [
        {"text": "skip to settings", "link": "#quicksettings"}
    ];
    let quicksettings;
    // setting variables

    // === EVENT HANDLERS =========================
    function onQFocus() {
        quicksettings.focus();
    }

    function updateSidebarDir(dir) {
        sidebarDir.set(dir);
    }
</script>


<svelte:window use:keyup={{q: onQFocus}}/>

<PageLayout>
    <h1 slot="pageHeading">Before we start,<br> please adjust these settings to best suit your needs.</h1>

    <SkipLinks slot="sidebar" {links} />

    <main slot="main">
        <div bind:this={quicksettings} class="region" tabindex="-1">
            <div class="heading">
                <h2>Quick Settings</h2>
                <Hint key="Q" />
            </div>

            <div class="setting">
                <p id="sidebardir">Sidebar Direction:</p>
                <div class="radioGroup">
                    <label>
                        <input checked={$sidebarDir==="left"} on:change={() => {updateSidebarDir("left")}} type="radio" name="sidebar direction" value="left" /> Left
                    </label>
                    <label>
                        <input checked={$sidebarDir==="right"} on:change={() => {updateSidebarDir("right")}} type="radio" name="sidebar direction" value="right" /> Right
                    </label>
                </div>
            </div>
        </div>
    </main>
</PageLayout>


<style lang="scss">

</style>