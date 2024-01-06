class Rectangle {
  constructor(width, heigh) {
    this.width = width;
    this.heigh = heigh;
  }
  set width(w) {
    if (w > 0) {
      this._Width = w;
    } else {
      console.log("The width must be a positive number !");
    }
  }

  get width() {
    return this._Width;
  }

  // ... same for height
  set heigh(h) {
    if (h > 0) {
      this._heigh = h;
    } else {
      console.error("Heigh cannot be negative");
    }
  }
  get heigh() {
    return this._heigh;
  }
}

const rectangle = new Rectangle(1, 4);
console.log(rectangle.width);
console.log(rectangle.heigh);
