import { browser } from '$app/env';
import { writable } from 'svelte/store';

// initialize stored variables (default values for server)
let storedSidebarDir = "left";
let storedSidebarPos = "center";
let storedGap = "medium";

if (browser) {
    // get stored values from localStorage if they existt
    if(localStorage.sidebarDir) storedSidebarDir = localStorage.sidebarDir;
    if(localStorage.sidebarPos) storedSidebarPos = localStorage.sidebarPos;
    if(localStorage.gap) storedGap = localStorage.gap;
}

/* === STORES ============================= */
export const curPage = writable(null);
export const sidebarDir = writable(storedSidebarDir);
export const sidebarPos = writable(storedSidebarPos);
export const gap = writable(storedGap);

/* === UPDATES ============================ */
sidebarDir.subscribe((value) => {
    // prevent code from running on server
    if (!browser) return

    // set localStorage and change hasCity if value is truthy
    localStorage.sidebarDir = value;
    // update data-sidebar-dir attr
    document.documentElement.setAttribute("data-sidebar-dir", value);
});

sidebarPos.subscribe((value) => {
    // prevent code from running on server
    if (!browser) return

    // set localStorage and change hasCity if value is truthy
    localStorage.sidebarPos = value;
    // update data-sidebar-pos attr
    document.documentElement.setAttribute("data-sidebar-pos", value);
});

gap.subscribe((value) => {
    // prevent code from running on server
    if (!browser) return

    // set localStorage and change hasCity if value is truthy
    localStorage.gap = value;
    // update :root --gap-lg variable
    switch (value) {
        case "small":
            document.documentElement.style.setProperty('--gap-lg', '1.5rem');
            break;
        case "medium":
            document.documentElement.style.setProperty('--gap-lg', '3rem');
            break;
        case "large":
            document.documentElement.style.setProperty('--gap-lg', '5rem');
    }
});