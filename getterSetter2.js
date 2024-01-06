// getter = special method that makes a property readable.
//setter = special method that make a property writable.
//? used to validate and modify a value reading/writing a property.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("heigh must be a positive number");
    }
  }

  get width() {
    return this._width; // return this private width
  }

  get height() {
    return this._height;
  }
}

const rectangle = new Rectangle(4, 6);

// we can also modify this properties now :
rectangle.width = 12; // valid modification
rectangle.height = 19; // valid modification

console.log(
  `This Rectangle have ${rectangle.width} cm as width and ${rectangle.height} cm as height`
);

// This Rectangle have 4 cm as width and 6 cm as height

/**
 * to prevent adding some negative values to the width or a string value to the heigh of the rectangle, we need some validation;
 * Here comes the setter and the getter , the setter first,
 * in the superclass we set the properties, one by one.
 * Using underscore _width tells to developers that this is a private property, so don't touch.
 * we set a validation for the width and the heigh, and give them a positive numbers  but the variables still undefined .
 * it 's because this variable are writable via set and not readable , so we need the getter one for width and an other for the heigh
 */
