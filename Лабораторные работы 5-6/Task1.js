class Rectangle {
  constructor(length, width) {
    this.#checkLength(length);
    this.#checkWidth(width);
    this.length = length;
    this.width = width;
    this.type = "прямоугольник";
  }

  #checkLength(length) {
    if (length <= 0) {
      throw new Error("Длина не может быть меньше или равна нулю");
    }
  }

  #checkWidth(width) {
    if (width <= 0) {
      throw new Error("Ширина не может быть меньше или равна нулю");
    }
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }

  area() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.type = "квадрат";
  }
}

class Rhombus {
  constructor(side, acuteAngle) {
    this.#checkSide(side);
    this.#checkAngle(acuteAngle);
    this.side = side;
    this.acuteAngle = acuteAngle;
    this.type = "ромб";
  }

  #checkSide(side) {
    if (side <= 0) {
      throw new Error("Сторона не может быть меньше или равна нулю");
    }
  }

  #checkAngle(angle) {
    if (angle <= 0 || angle >= 180) {
      throw new Error("Угол должен быть между 0 и 180 градусами");
    }
  }

  perimeter() {
    return 4 * this.side;
  }

  area() {
    return Math.pow(this.side, 2) * Math.sin(this.acuteAngle * Math.PI / 180);
  }
}

class ArbitraryQuadrilateral {
  constructor(a, b, c, d, angle1, angle2) {
    this.#checkSides(a, b, c, d);
    this.sides = [a, b, c, d];
    this.angles = [angle1, angle2];
    this.type = "произвольный";
  }

  #checkSides(a, b, c, d) {
    if ([a, b, c, d].some(side => side <= 0)) {
      throw new Error("Все стороны должны быть больше нуля");
    }
  }

  perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }

  area() {
    const [a, b, c, d] = this.sides;
    const semiPerimeter = this.perimeter() / 2;
    return Math.sqrt((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c) * (semiPerimeter - d));
  }
}


const quadrilaterals = [
  new Rectangle(5, 3),
  new Rectangle(4, 4), 
  new Square(6),
  new Square(4),
  new Rhombus(5, 60),
  new Rhombus(4, 45),
  new ArbitraryQuadrilateral(3, 4, 5, 6, 90, 90),
  new ArbitraryQuadrilateral(2, 3, 4, 5, 80, 100),
  new Rectangle(8, 2),
  new Square(7)
];

function analyzeQuadrilaterals(figures) {

  const groups = {};
  
  figures.forEach(figure => {
    if (!groups[figure.type]) {
      groups[figure.type] = [];
    }
    groups[figure.type].push(figure);
  });
  

  const results = {};
  

  for (const [type, figures] of Object.entries(groups)) {
    results[type] = {
      count: figures.length,
      maxArea: figures.reduce((max, fig) => fig.area() > max.area() ? fig : max),
      minArea: figures.reduce((min, fig) => fig.area() < min.area() ? fig : min),
      maxPerimeter: figures.reduce((max, fig) => fig.perimeter() > max.perimeter() ? fig : max),
      minPerimeter: figures.reduce((min, fig) => fig.perimeter() < min.perimeter() ? fig : min)
    };
  }
  
  return results;
}


const analysis = analyzeQuadrilaterals(quadrilaterals);


console.log("Анализ четырехугольников:");
console.log("=========================");

for (const [type, data] of Object.entries(analysis)) {
  console.log(`\n${type.toUpperCase()}:`);
  console.log(`  Количество: ${data.count}`);
  console.log(`  Наибольшая площадь: ${data.maxArea.area().toFixed(2)} (${JSON.stringify(data.maxArea.sides || {length: data.maxArea.length, width: data.maxArea.width})})`);
  console.log(`  Наименьшая площадь: ${data.minArea.area().toFixed(2)} (${JSON.stringify(data.minArea.sides || {length: data.minArea.length, width: data.minArea.width})})`);
  console.log(`  Наибольший периметр: ${data.maxPerimeter.perimeter().toFixed(2)} (${JSON.stringify(data.maxPerimeter.sides || {length: data.maxPerimeter.length, width: data.maxPerimeter.width})})`);
  console.log(`  Наименьший периметр: ${data.minPerimeter.perimeter().toFixed(2)} (${JSON.stringify(data.minPerimeter.sides || {length: data.minPerimeter.length, width: data.minPerimeter.width})})`);
}

console.log("\nОБЩАЯ СТАТИСТИКА:");
console.log("=================");
console.log(`Всего четырехугольников: ${quadrilaterals.length}`);
console.log(`Типы: ${Object.keys(analysis).join(", ")}`);