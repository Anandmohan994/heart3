var RotateModel = pc.createScript('rotateModel');

// Initialize the script
RotateModel.prototype.initialize = function() {
    this.isRotating = false; // Track whether the user is dragging
    this.lastMouseX = 0; // Store last mouse X position
    this.lastMouseY = 0; // Store last mouse Y position

    // Listen for mouse events
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
};

// Start rotating when mouse is pressed
RotateModel.prototype.onMouseDown = function(event) {
    this.isRotating = true;
    this.lastMouseX = event.x;
    this.lastMouseY = event.y;
};

// Stop rotating when mouse is released
RotateModel.prototype.onMouseUp = function() {
    this.isRotating = false;
};

// Update the rotation based on mouse movement
RotateModel.prototype.onMouseMove = function(event) {
    if (this.isRotating) {
        var deltaX = event.x - this.lastMouseX;
        var deltaY = event.y - this.lastMouseY;

        // Rotate the model based on mouse movement
        this.entity.rotateLocal(0, -deltaX * 0.2, 0); // Horizontal rotation (Y axis)
        this.entity.rotateLocal( 0, 0, 0); // Vertical rotation (X axis)

        // Update last mouse position
        this.lastMouseX = event.x;
        this.lastMouseY = event.y;
    }
};

// Update function, if you need smooth automatic rotation or other effects
RotateModel.prototype.update = function(dt) {
    // You can add automatic rotation or other effects here, if desired.
};
