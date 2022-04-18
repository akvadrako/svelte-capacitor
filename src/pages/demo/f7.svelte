<!--
This does not work - it breaks routing
-->
<script>
    // Import Framework7 Core
    import Framework7 from 'framework7/lite';

    // import 'framework7/framework7-bundle.min.css'

    // Import Framework7 Svelte
    import Framework7Svelte from 'framework7-svelte';

    // Init plugin
    Framework7.use(Framework7Svelte)

    import { App, View, Page, Navbar, Toolbar, Link } from 'framework7-svelte';
</script>

<App theme="auto" name="My App" id="com.demoapp.test">

    <View router={false}>
        <Page>
            <Navbar title="Awesome App"></Navbar>
            <Toolbar bottom>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
            </Toolbar>
            <p>Page content goes here</p>
            <a href="/">Back to home</a>
            <Link href="/about/">About App</Link>
        </Page>
    </View>
</App>

<style>
</style>
