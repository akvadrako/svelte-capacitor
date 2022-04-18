
<script>
return navigator
        .mediaDevices
        .getUserMedia({video: {
            "facingMode": "environment",
            "width": cameraWidth,
            "height": cameraHeight
        }})
        .then((stream) => {
            let cameraURL = URL.createObjectURL(stream);

            // create Three.js texture with updated camera picture
        })
        .catch(function(exception) {
            // ...
        });
</script>
