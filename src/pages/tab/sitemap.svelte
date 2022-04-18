
<!-- routify:options title="Site-mapper" -->

<script>
    import { isActive, url, layout } from "@roxi/routify";
</script>

<style>
  .active {font-weight: bold}
</style>

<div>
    <ul>
    {#each $layout.children as { path, title }}
        <li class:active={$isActive(path)}>
            <a href={$url(path)}>{title}</a>
        </li>
    {/each}
    </ul>
</div>

<ul>
    <li><a href="https://ionicsvelte.firebaseapp.com/ionic/Slides">demo</a></li>
</ul>

