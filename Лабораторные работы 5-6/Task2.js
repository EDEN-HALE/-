// Задание 2
class Animal {
    #name;
    #age;
    #isAlive = true;
    static totalAnimals = 0;

    constructor(name, age, species, habitat) {
        if (!name || typeof name !== 'string') {
            throw new Error('Имя должно быть непустой строкой');
        }
        if (age < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }

        this.#name = name;
        this.#age = age;
        this.species = species;
        this.habitat = habitat;
        this.health = 100;

        Animal.totalAnimals++;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (!newName || typeof newName !== 'string') {
            throw new Error('Имя должно быть непустой строкой');
        }
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (newAge < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        this.#age = newAge;
    }

    get isAlive() {
        return this.#isAlive;
    }

    move() {
        console.log(`${this.#name} перемещается`);
    }

    eat(food) {
        if (!this.#isAlive) {
            console.log(`${this.#name} не может есть - он мертв`);
            return;
        }
        console.log(`${this.#name} ест ${food}`);
        this.health = Math.min(100, this.health + 10);
    }

    sleep() {
        if (!this.#isAlive) {
            console.log(`${this.#name} не может спать - он мертв`);
            return;
        }
        console.log(`${this.#name} спит`);
        this.health = Math.min(100, this.health + 5);
    }

    takeDamage(damage) {
        if (!this.#isAlive) return;
        this.health -= damage;
        console.log(`${this.#name} получил урон ${damage}. Здоровье: ${this.health}`);

        if (this.health <= 0) {
            this.die();
        }
    }

    #die() {
        if (!this.#isAlive) return;
        this.#isAlive = false;
        console.log(`${this.#name} умер`);
        Animal.totalAnimals--;
    }

    die() {
        this.#die();
    }

    static getTotalAnimals() {
        return Animal.totalAnimals;
    }

    static compareAge(animal1, animal2) {
        return animal1.age - animal2.age;
    }

    toString() {
        return `${this.species} по имени ${this.#name}, возраст: ${this.#age}, здоровье: ${this.health}`;
    }

    get status() {
        return {
            name: this.#name,
            age: this.#age,
            species: this.species,
            habitat: this.habitat,
            health: this.health,
            isAlive: this.#isAlive
        };
    }
}

class Mammal extends Animal {
    constructor(name, age, species, habitat, furColor) {
        super(name, age, species, habitat);
        this.furColor = furColor;
        this.hasFur = true;
    }

    giveBirth() {
        console.log(`${this.name} рожает детенышей`);
    }
}

class Bird extends Animal {
    constructor(name, age, species, habitat, wingspan) {
        super(name, age, species, habitat);
        this.wingspan = wingspan;
        this.canFly = true;
    }

    move() {
        console.log(`${this.name} летит`);
    }

    fly() {
        if (!this.isAlive) {
            console.log(`${this.name} не может летать - он мертв`);
            return;
        }
        console.log(`${this.name} летит с размахом крыльев ${this.wingspan}см`);
    }
}

class Fish extends Animal {
    constructor(name, age, species, habitat, waterType) {
        super(name, age, species, habitat);
        this.waterType = waterType;
        this.canFly = false;
    }

    move() {
        console.log(`${this.name} плавает`);
    }

    swim() {
        console.log(`${this.name} плавает в ${this.waterType === 'fresh' ? 'пресной' : 'соленой'} воде`);
    }
}

class Reptile extends Animal {
    constructor(name, age, species, habitat, scaleType) {
        super(name, age, species, habitat);
        this.scaleType = scaleType;
        this.hasFur = false;
    }

    crawl() {
        console.log(`${this.name} ползает`);
    }
}

class Lion extends Mammal {
    roar() {
        console.log(`${this.name} рычит`);
    }
}

class Tiger extends Mammal {
    hunt() {
        console.log(`${this.name} охотится`);
    }
}

class Crocodile extends Reptile {
    constructor(name, age, species, habitat, scaleType) {
        super(name, age, species, habitat, scaleType);
    }

    swim() {
        console.log(`${this.name} плавает в воде`);
    }
}

class Owl extends Bird {
    hoot() {
        console.log(`${this.name} ухает`);
    }
}

class Parrot extends Bird {
    speak() {
        console.log(`${this.name} повторяет слова`);
    }
}

class Shark extends Fish {
    attack() {
        console.log(`${this.name} атакует`);
    }
}


const genericAnimal = new Animal("Баззи", 3, "Неизвестный вид", "Лес");

const mammal = new Mammal("Мурка", 2, "Кошка", "Дом", "серый");
const bird = new Bird("Кеша", 1, "Попугай", "Тропики", 25);
const fish = new Fish("Немо", 1, "Рыба-клоун", "Океан", "salt");

const reptile = new Reptile("Ползун", 4, "Змея", "Пустыня", "мелкая чешуя");

const lion = new Lion("Симба", 5, "Лев", "Саванна", "золотистый");
const tiger = new Tiger("Шерхан", 4, "Тигр", "Джунгли", "оранжевый с черным");

const crocodile = new Crocodile("Гена", 10, "Крокодил", "Река", "крупная чешуя");

const owl = new Owl("Сова", 2, "Сова", "Лес", 80);
const parrot = new Parrot("Рио", 3, "Ара", "Тропики", 40);

const shark = new Shark("Джо", 7, "Акула", "Океан", "salt");

console.log("=== Демонстрация методов ===");

genericAnimal.move();
genericAnimal.eat("ягоды");
genericAnimal.sleep();

mammal.giveBirth();
lion.roar();
tiger.hunt();

bird.fly();
owl.hoot();
parrot.speak();

fish.swim();
shark.attack();

reptile.crawl();
crocodile.swim();

console.log(`\n=== Статистика ===`);
console.log(`Всего животных: ${Animal.getTotalAnimals()}`);

console.log(`\n=== Статусы животных ===`);
console.log("Лев:", lion.status);
console.log("Акула:", shark.status);

console.log(`\n=== Сравнение возрастов ===`);
const ageComparison = Animal.compareAge(lion, tiger);
console.log(`Разница в возрасте между львом и тигром: ${ageComparison} лет`);

console.log(`\n=== Тест системы повреждений ===`);
console.log(`Здоровье льва до повреждения: ${lion.health}`);
lion.takeDamage(30);
console.log(`Здоровье льва после повреждения: ${lion.health}`);

console.log(`\n=== Строковые представления ===`);
console.log(genericAnimal.toString());
console.log(parrot.toString());

console.log(`\n=== Проверка сеттеров/геттеров ===`);
console.log(`Имя попугая до изменения: ${parrot.name}`);
parrot.name = "Кеша-новый";
console.log(`Имя попугая после изменения: ${parrot.name}`);

try {
    parrot.name = "";
} catch (error) {
    console.log(`Ошибка при установке пустого имени: ${error.message}`);
}

console.log(`\n=== Проверка наследования ===`);
console.log(`Лев является млекопитающим: ${lion instanceof Mammal}`);
console.log(`Лев является животным: ${lion instanceof Animal}`);
console.log(`Крокодил является рептилией: ${crocodile instanceof Reptile}`);