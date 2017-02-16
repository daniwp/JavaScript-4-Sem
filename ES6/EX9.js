class Shape {
    constructor(color) {
        this._color = color;
    }
    get area() {
        return undefined;
    }
    get perimeter() {
        return undefined;
    }
    get color() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `Hello! my color is ${this._color}`;
    }
}
console.log("SHAPE CLASS:::::");
var hello = new Shape("blue");
hello.setColor("black");
console.log(hello.toString());



class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this._radius = radius;

    }
    get radius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
    get perimeter() {
        return 2 * this._radius * Math.PI;

    }
    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    toString() {
        return `the radius is ${this._radius}`;
    }
}
console.log("CIRCLE CLASS:::::");
var circle = new Circle(200);

console.log(circle.radius);



class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(radius, color);
        this._height = height;
    }
    get height() {
        return this._height;
    }
    setHeight(height) {
        this._height = height;
    }
    get perimeter() {
        return 2 * this._radius * Math.PI;
    }
    get area() {
        return 2 * Math.PI * this._radius * this._height;
    }
    toString() {
        return `the height is ${this._height} Meters`;
    }
    get volume() {
        return Math.PI * Math.pow(this._radius, 2) * this._height;
    }

}
console.log("CYLINDER CLASS:::::");
var cyl = new Cylinder("black", 299, 29);
console.log(cyl.volume);
