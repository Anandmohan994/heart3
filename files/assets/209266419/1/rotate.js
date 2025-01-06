var Rotate = pc.createScript('rotate');

// Initialize code called once per entity
Rotate.prototype.initialize = function() {
    // You can set the initial rotation speed (in degrees per second)
    this.rotationSpeed = 20; // degrees per second
};

// Update code called every frame
Rotate.prototype.update = function(dt) {
    // Rotate the object around the Y-axis (can be changed to X or Z)
    var rotation = this.entity.getLocalRotation(); // Get current rotation
    rotation.y += this.rotationSpeed * dt; // Add rotation over time
    this.entity.setLocalRotation(rotation); // Apply the new rotation
};
