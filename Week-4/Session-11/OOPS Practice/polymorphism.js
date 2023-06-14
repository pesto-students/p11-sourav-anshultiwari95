class Shape {
    calculateArea() {

    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}


const rectangle = new Rectangle(16, 8);
console.log('Rectangle area:', rectangle.calculateArea());

const triangle = new Triangle(7, 9);
console.log('Triangle area:', triangle.calculateArea());

const circle = new Circle(12);
console.log('Circle area:', circle.calculateArea());
