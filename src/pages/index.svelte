<script>
let iframe

function onload(e) {
    console.debug('load', iframe.contentWindow.location.toString())
}
</script>

<flex>
    <main>
        <iframe
            bind:this={iframe}
            title="body" name="body" id="body" src="/home"
            on:load={onload}
            sandbox="allow-modals allow-scripts allow-same-origin">
            frame body
        </iframe>
    </main>

    <nav>
        <img src="/svelte_cap.png" alt="logo" />

        <a target="body" href="/home">home</a>
        <a target="body" href="/canvas">canvas</a>
        <a target="body" href="/f7">f7</a>
        <a target="body" href="/ionic">ionic</a>
    </nav>
</flex>

<style>

#body {
    width: 100%;
    height: 100%;
}

main {
    flex-grow: 1;
    background: grey;
}

flex {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
    width: 100vw;
    background: green;
}

nav {
    background: black;
    height: 20px;
    padding: 8px;
    flex-grow: 0;
    gap: 1px;
    color: white;
    display: flex;
    justify-content: stretch;
    align-items: center;
    font-size: 20px;
    border-top: 1px solid white;
}

nav a {
    padding: 4px;
    background: red;
    color: inherit;
    text-decoration: none;
    flex-grow: 1;
    text-align: center;
}

nav img {
    height: 100%;
    background: white;
    object-fit: cover;
}
</style>
