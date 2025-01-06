var RotateObject = pc.createScript('rotateObject3');

// Initialize the script
RotateObject.prototype.initialize = function() {
    this.lastTouch = null; // To track the last touch position for swipe detection
    this.rotationSpeed = 0.5; // Speed of rotation

    // Register touch or mouse events
    if (this.app.touch) {
        // For mobile touch input
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    } else {
        // For desktop mouse input
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }
};

// Handle touch start (or mouse down)
RotateObject.prototype.onTouchStart = function(event) {
    var touch = event.changedTouches[0]; // Get the first touch
    this.lastTouch = touch; // Store the touch position for movement calculations
};

// Handle touch move (or mouse move)
RotateObject.prototype.onTouchMove = function(event) {
    var touch = event.changedTouches[0]; // Get the first touch
    if (this.lastTouch) {
        var deltaX = touch.x - this.lastTouch.x; // Calculate horizontal swipe distance

        // Rotate the object around the Y-axis based on the touch movement
        this.entity.rotate(0, deltaX * this.rotationSpeed, 0);
    }

    // Update the last touch position
    this.lastTouch = touch;
};

// Handle touch end (or mouse up)
RotateObject.prototype.onTouchEnd = function(event) {
    // Reset lastTouch when touch ends
    this.lastTouch = null;
};

// Handle mouse down (for desktop)
RotateObject.prototype.onMouseDown = function(event) {
    this.lastTouch = { x: event.x, y: event.y }; // Store initial mouse position
};

// Handle mouse move (for desktop)
RotateObject.prototype.onMouseMove = function(event) {
    if (this.lastTouch) {
        var deltaX = event.x - this.lastTouch.x; // Calculate horizontal mouse movement

        // Rotate the object around the Y-axis based on the mouse movement
        this.entity.rotate(0, deltaX * this.rotationSpeed, 0);
    }

    // Update the last mouse position
    this.lastTouch = { x: event.x, y: event.y };
};

// Handle mouse up (for desktop)
RotateObject.prototype.onMouseUp = function(event) {
    this.lastTouch = null; // Reset last touch/mouse position
};

// Clean up listeners when the script is destroyed (to avoid memory leaks)
RotateObject.prototype.destroy = function() {
    if (this.app.touch) {
        this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    } else {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }
};
