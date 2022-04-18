<script>
    import "@lib/ionic";

    import { metatags, page, goto } from "@roxi/routify"
    import { pageState } from "@store"

    $: metatags.title = `Tab: ${$page.title}`

    function selectTab(event) {
        let page = `./${event.detail.tab}`
        console.log('nav', page)
        $goto(page)
    };

    $: selected = $page.path.split('/').pop()
    $: console.log('page', $page.title, $page.path, selected)

    $: hide = $pageState.count < 1
</script>

<ion-app on:ionTabButtonClick={selectTab}>
    <ion-header translucent="true">
        <ion-toolbar>
             <ion-title>Tab: {$page.title}</ion-title>
             <ion-buttons slot="start">
                 <!-- ion-back-button replacement -->
                 <ion-button
                     class:hide
                     on:click={() => window.history.back()}>
                    <ion-icon name="arrow-back" color="primary" />
                    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
                </ion-button>
             </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <slot />
    </ion-content>

    <ion-tab-bar slot="bottom" selected-tab={selected}>
        <ion-tab-button tab="index">
            <ion-label>Home</ion-label>
            <ion-icon name="home"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="settings">
            <ion-label>Settings</ion-label>
            <ion-icon name="settings"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="sitemap">
            <ion-label>Sitemap</ion-label>
            <ion-icon name="list"></ion-icon>
        </ion-tab-button>
    </ion-tab-bar>
</ion-app>

<style>
    .hide { display: none }
</style>

