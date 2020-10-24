var availablePets = [];
var Pets = /** @class */ (function () {
    function Pets(animal) {
        this.newAnimal = { animal: "", color: "", breed: "" };
        this.count = 0;
        this.animal = animal.animal;
        this.color = animal.color;
        this.breed = animal.breed;
        this.newAnimal = {
            animal: this.animal,
            color: this.color,
            breed: this.breed
        };
    }
    Pets.prototype.getAnimals = function () {
        console.log("Getting Animals", availablePets);
    };
    Pets.prototype.pushAnimal = function () {
        console.log("Pushing Animals");
        availablePets.push(this.newAnimal);
    };
    Pets.prototype.requestAnimal = function () {
        console.log("Requesting Animal");
        for (var _i = 0, availablePets_1 = availablePets; _i < availablePets_1.length; _i++) {
            var animal = availablePets_1[_i];
            this.count += 1;
            if (JSON.stringify(this.newAnimal) === JSON.stringify(animal)) {
                console.log("Animal is available");
                break;
            }
            else {
                if (this.count === availablePets.length) {
                    console.log("Animal is not available");
                }
            }
        }
    };
    return Pets;
}());
var dogAnimal = {
    animal: 'Dog',
    color: 'White',
    breed: 'Husky'
};
var catAnimal = {
    animal: 'Cat',
    color: 'White',
    breed: 'Meow'
};
var dog = new Pets(dogAnimal);
var cat = new Pets(catAnimal);
dog.pushAnimal();
cat.pushAnimal();
// Get Animals
cat.getAnimals();
// Request
var requestAnimal = {
    animal: 'Horse',
    color: 'White',
    breed: 'Meow'
};
var wantedAnimal = new Pets(requestAnimal);
wantedAnimal.requestAnimal();
