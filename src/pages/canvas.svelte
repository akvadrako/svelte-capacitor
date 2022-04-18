
<script>
    import { onMount, onDestroy } from 'svelte';
    
    function init2d() {
        var canvas_2d = document.getElementById('tutorial');
        var ctx = canvas_2d.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }

    var timer, gl, canvas;
    
    function getRandomColor() {
        return [Math.random(), Math.random(), Math.random()];
    }

    function drawAnimation() {
        var color = getRandomColor();
        gl.clearColor(color[0], color[1], color[2], 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function init3d() {
        canvas = document.getElementById("canvas-view");
        gl = canvas.getContext("webgl")
            || canvas.getContext("experimental-webgl");

        gl.viewport(0, 0,
            gl.drawingBufferWidth, gl.drawingBufferHeight);

        timer = setInterval(drawAnimation, 1000);
    }

    onMount(async () => {
        init2d();
        init3d();

    });
    
    onDestroy(() => clearInterval(timer));

</script>

<hr/>

<canvas id="tutorial" width="200" height="300">
    <img src="http://placekitten.com/200/300" width="200" height="300" alt="kitten"/>
</canvas>

<hr/>

<canvas id="canvas-view" width="200" height="300">
</canvas>

<hr/>

<style>
    canvas {
        border: 1px solid black;
        display: block;
    }
</style>
