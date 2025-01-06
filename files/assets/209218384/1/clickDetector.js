var ClickDetector = pc.createScript('clickDetector');

// Initialize method
ClickDetector.prototype.initialize = function() {
    // Register the mouse click event
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

// Mouse down event handler
ClickDetector.prototype.onMouseDown = function (event) {
    // Get the mouse position in the screen space
    var mousePosition = new pc.Vec2(event.x / window.innerWidth, event.y / window.innerHeight);

    // Find the camera in the scene (make sure your camera is named "Camera")
    var camera = this.app.root.findByName('Camera');

    // Convert mouse position to world coordinates
    var from = camera.camera.screenToWorld(mousePosition.x, mousePosition.y, camera.camera.nearClip);
    var to = camera.camera.screenToWorld(mousePosition.x, mousePosition.y, camera.camera.farClip);

    // Cast a ray from the camera to the mouse click position
   // var result = this.app.systems.raycaster.queryRay(from, to);

    // Check if the ray hit the cube
   // if (result && result.entity === this.entity) {
    //    console.log("Hello");
   // }
    var color = new pc.Color(Math.random(), Math.random(), Math.random()); // Generates a random color
    this.entity.model.material.diffuse = color;  // Set the diffuse color of the cube's material
    this.entity.model.material.update();  // Update the material to apply the color change
    console.log("Hello - Cube Color Changed", mousePosition);
};
