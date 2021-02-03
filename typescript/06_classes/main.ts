class Human {// costem types that you make it

    age : number;// fields
    hobbies : string[];// fields
    firstName   : string;// fields
    name :string;// fields
    adress : string;// fields
    hairColor : string;// fields
    has_children : boolean;// fields

    sePresenter() {
        console.log("Bonjour à tous je m'appel " + this.name + " " + this.firstName + " et j'ai" + this.age + " ans   j'habite " + this.adress  + " et j'ai les cheveux " + this.hairColor);
    }
}

// pour déclarer une variable de type Human
let amine_1 : Human; // déclarer un objet de type de type Human

let amine = new Human();// instancier une classe et on a créer de type Human
amine.age = 27;
amine.firstName = "Amine";
amine.name = "chaair";
amine.adress = "rue de Belleville paris 20";
amine.hairColor = "noir";

amine.sePresenter();