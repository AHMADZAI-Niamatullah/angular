var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.sePresenter = function () {
        console.log("Bonjour à tous je m'appel " + this.name + " " + this.firstName + " et j'ai" + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    };
    return Human;
}());
// pour déclarer une variable de type Human
var amine_1; // déclarer un objet de type de type Human
var amine = new Human(); // instancier une classe et on a créer de type Human
amine.age = 27;
amine.firstName = "Amine";
amine.name = "chaair";
amine.adress = "rue de Belleville paris 20";
amine.hairColor = "noir";
amine.sePresenter();
