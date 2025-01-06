var RotateObject = pc.createScript('rotateObject2');

// Update function that runs every frame
RotateObject.prototype.update = function (dt) {
    var speed = 15; // Rotation speed
    var rotation = 0;

    // Check for left or right arrow keys (or customize with other keys)
    if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        rotation = speed * dt; // Rotate left
    } else if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        rotation = -speed * dt; // Rotate right
    }

    // Apply the rotation to the entity
    this.entity.rotate(0, rotation, 0);
};
