<script context="module">
    import "@lib/ionic";

    import { isActive, url, layout } from "@roxi/routify";
</script>

<ion-app>
    <ion-header translucent="true">
        <ion-toolbar>
             <ion-title>Ionic UI Companion</ion-title>
             <ion-buttons slot="start">
                 <ion-back-button></ion-back-button>
             </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-tabs>
            <ion-tab tab="home">
                <h1>Home Content</h1>
                <div>
                    <h2>BADGES</h2>
                    <!-- Default -->
                    <ion-badge>99</ion-badge>
                    <!-- Colors -->
                    <ion-badge color="primary">11</ion-badge>
                    <ion-badge color="secondary">22</ion-badge>
                    <ion-badge color="tertiary">33</ion-badge>
                    <ion-badge color="success">44</ion-badge>
                    <ion-badge color="warning">55</ion-badge>
                    <ion-badge color="danger">66</ion-badge>
                    <ion-badge color="light">77</ion-badge>
                    <ion-badge color="medium">88</ion-badge>
                    <ion-badge color="dark">99</ion-badge>
                </div>
            </ion-tab>

            <ion-tab tab="index">
                <h1>Index</h1>
                <div>
                    <ul>
                    {#each $layout.children as { path, title }}
                        <li class:active={$isActive(path)}>
                            <a href={$url(path)}>{title}</a>
                        </li>
                    {/each}
                    </ul>
                </div>
            </ion-tab>

            <ion-tab tab="settings">
                <h1>Settings Content</h1>

                <ion-footer>
                    <ion-toolbar>
                        <ion-title>Footer</ion-title>
                    </ion-toolbar>
                </ion-footer>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home">
                    <ion-label>Home</ion-label>
                    <ion-icon name="home"></ion-icon>
                </ion-tab-button>
                <ion-tab-button tab="settings">
                    <ion-label>Settings</ion-label>
                    <ion-icon name="settings"></ion-icon>
                </ion-tab-button>
                <ion-tab-button tab="index">
                    <ion-label>Index</ion-label>
                    <ion-icon name="list"></ion-icon>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-content>
</ion-app>

<style>
  .active {font-weight: bold}
</style>
