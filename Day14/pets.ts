interface Animal {
    animal:string,
    color:string,
    breed:string,
}

let availablePets: Animal[] = [];

class Pets{
    animal:string;
    color:string;
    breed: string;
    newAnimal:Animal =  {animal: "",color:"",breed:""};
    count: number= 0;
    

    constructor(animal:Animal){
        this.animal = animal.animal;
        this.color = animal.color;
        this.breed = animal.breed;
        this.newAnimal = {
            animal: this.animal,
            color: this.color,
            breed: this.breed
        }
    }

    getAnimals(){
        console.log("Getting Animals",availablePets)
    }

    pushAnimal(){
        console.log("Pushing Animals")
         availablePets.push(this.newAnimal);
    }

    requestAnimal(){
        console.log("Requesting Animal")
        for(let animal of availablePets){
            this.count += 1
            if(JSON.stringify(this.newAnimal) === JSON.stringify(animal)){
                console.log("Animal is available");
                break;
            }else{
                if(this.count === availablePets.length){
                console.log("Animal is not available")
                }
            }
        }

    }
}

let  dogAnimal:Animal = {
    animal: 'Dog',
    color: 'White',
    breed: 'Husky'
}
let  catAnimal:Animal = {
    animal: 'Cat',
    color: 'White',
    breed: 'Meow'
}


let dog = new Pets(dogAnimal)
let cat = new Pets(catAnimal)
dog.pushAnimal();
cat.pushAnimal();


// Get Animals
cat.getAnimals();

// Request

let  requestAnimal:Animal = {
    animal: 'Horse',
    color: 'White',
    breed: 'Meow'
}


let wantedAnimal = new Pets(requestAnimal)
wantedAnimal.requestAnimal()