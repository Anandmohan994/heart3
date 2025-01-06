var RotateObject = pc.createScript('rotateObject');

// Update function that runs every frame
RotateObject.prototype.update = function (dt) {
    // Rotate the entity around its Y-axis by 45 degrees per second
    var speed = 45; // degrees per second
    this.entity.rotate(0, speed * dt, 0);
};
