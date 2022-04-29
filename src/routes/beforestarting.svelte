<script>
    // === IMPORTS ================================
    import PageLayout from "./_pageLayout.svelte";
    import SkipLinks from '$lib/skipLinks.svelte';
    import Hint from '$lib/hint.svelte';
    import { keyup } from '$lib/keyup.js';
    import { sidebarDir, sidebarPos, gap } from '../store/store.js';

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

    function updateSidebarPos(pos) {
        sidebarPos.set(pos);
    }

    function updateGap(gapSize) {
        gap.set(gapSize);
    }
</script>


<svelte:window use:keyup={{q: onQFocus}}/>

<PageLayout>
    <h1 slot="pageHeading">Before we start,<br> please adjust these settings to best suit your needs.</h1>

    <SkipLinks slot="sidebar" {links} />

    <main slot="main">
        <div bind:this={quicksettings} class="region" id="quicksettings" tabindex="-1">
            <div class="heading">
                <h2>Quick Settings</h2>
                <Hint key="Q" />
            </div>

            <div class="setting">
                <p id="sidebardir" class="label">Sidebar Direction:</p>
                <div class="radioGroup two">
                    <label>
                        <input checked={$sidebarDir==="left"} on:change={() => {updateSidebarDir("left")}} type="radio" name="sidebar direction" value="left" /> Left
                    </label>
                    <label>
                        <input checked={$sidebarDir==="right"} on:change={() => {updateSidebarDir("right")}} type="radio" name="sidebar direction" value="right" /> Right
                    </label>
                </div>
            </div>

            <div class="setting">
                <p id="sidebarpos" class="label">Sidebar Position:</p>
                <div class="radioGroup two">
                    <label>
                        <input checked={$sidebarPos==="center"} on:change={() => {updateSidebarPos("center")}} type="radio" name="sidebar position" value="center" /> Center
                    </label>
                    <label>
                        <input checked={$sidebarPos==="edge"} on:change={() => {updateSidebarPos("edge")}} type="radio" name="sidebar position" value="edge" /> Edge
                    </label>
                </div>
            </div>

            <div class="setting">
                <p id="sidebarpos" class="label">Spacing:</p>
                <div class="radioGroup three">
                    <label>
                        <input checked={$gap==="small"} on:change={() => {updateGap("small")}} type="radio" name="gap size" value="small" /> Small
                    </label>
                    <label>
                        <input checked={$gap==="medium"} on:change={() => {updateGap("medium")}} type="radio" name="gap size" value="medium" /> Medium
                    </label>
                    <label>
                        <input checked={$gap==="large"} on:change={() => {updateGap("large")}} type="radio" name="gap size" value="large" /> Large
                    </label>
                </div>
            </div>
        </div>
    </main>
</PageLayout>


<style lang="scss">
    .radioGroup {
        /* grid */
        display: grid;

        position: relative;
        z-index: 3;

        /* border */
        border: solid var(--clr-region-border) var(--bwidth-main) ;
        border-radius: var(--bradius-sm);

        background-color: var(--clr-elem-bg);

        transition: color var(--transition-faster) var(--transition-fn1),
                    background-color var(--transition-faster) var(--transition-fn1),
                    border-color var(--transition-faster) var(--transition-fn1);

        &::after {
            /* after pseudo class for animated box-shadow */
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;

            /* box-shadow (::after) is hidden by default. opacity is used to improve performace */
            box-shadow: var(--box-shadow);
            
            opacity: 0;
            transition: opacity var(--transition-faster) var(--transition-fn1);
        }

        &:hover {
            border-color: var(--clr-accent);

            &::after {
                /* show box-shadow */
                opacity: 1;
            }
        }

        &:focus-within {
            border-color: var(--clr-accent);
            background-color: var(--clr-accent);

            &::after {
                /* show box-shadow */
                opacity: 1;
            }
        }

        &.two {
            grid-template-columns: 1fr 1fr;
        }

        &.three {
            grid-template-columns: 1fr 1fr 1fr;
        }

        label {
            padding: calc(var(--pad-xs) - var(--bwidth-main)) calc(var(--pad-sm) - var(--bwidth-main));
            border-radius: var(--bradius-sm);
        }
    }
</style>