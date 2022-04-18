<script>
    var name = "svelte"
    var image = "svelte_cap.png"

    import { App, Page, Navbar, Block } from 'konsta/svelte';
</script>

<App theme="android">
    <Page>
    <Navbar title="My App" />

    <Block strong>Hello world!</Block>
    <div class="main">
        <img src={image} alt='img' />
        <h1>Welcome to {name}!</h1>
    </div>
    </Page>
</App>

<style>
    .main {
        text-align: center;
        margin: 50px auto;
    }

    img {
        max-width: 100%;
    }
</style>
