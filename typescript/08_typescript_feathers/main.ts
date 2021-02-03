class Human3 {// costem types that you make it

    // age : number;// fields
    // hobbies : string[];// fields
    // firstName   : string;// fields
    // name :string;// fields
    // adress : string;// fields
    // hairColor : string;// fields
    // has_children : boolean;// fields

// en mettant les argument en private, c'est  comme-ci on déclarait chaque fieldes avant dans la clase
// les propriétés de ma classe sont en privée 
// donc je n'y ai pas accés à l'exétérieur de ma classe

constructor(private name:string, private firstName:string, private age:number, private adress:string, private hairColor:string, private has_children:boolean, private hobbies:string[]){
    this.age = age;
    this.hobbies = hobbies;
    this.firstName = firstName;
    this.name = name;
    this.adress = adress;
    this.hairColor = hairColor;
    this.has_children = has_children;
}

    sePresenter() {
        console.log("Bonjour à tous je m'appel " + this.name + " " + this.firstName + " et j'ai" + this.age + " ans   j'habite " + this.adress  + " et j'ai les cheveux " + this.hairColor);
    }

    getAge(){
        return this.age;
    }
}

let amine4 = new Human2("Amine", "Chaair", 27, "rue de Belleville Paris 20", "noir", false, ["marché financé", "moto", "escalade"]);


// Acces Modifiers (l'accés aux propriétés et aux méthodes à l'indérieur d'une classe)

// public (par défaut) => accessible partout et par tous 

//private => accessible que dans la classe
// protected => les méthode et propriétés de la classe sont accessibles seulement dans le même pakage ou sous classe dans différents pakage