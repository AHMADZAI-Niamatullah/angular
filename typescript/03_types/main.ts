//
// JS
//

let titi = 4;
// Implicitement titi devient une variable de type number
titi = "text";
//ici j'ai une erreur car je ne peux pas réaffecter à une variable de type number une valeur string


// Solution
let tutu;
tutu =3;
tutu = true;
tutu = "text";

// typer de façon implicite 
let b : number;
b = "text";

let c : string = "text";
let d : boolean;
let e : object;
let f : any[] = ["1", 2, true, ["toto", "titi"]];
let g : number[] = [2, 2, 4, 5];

// ENUM

const ColorRed = 0;
const ColorOrange = 1;
const ColorBlue = 2;

enum Color {
    Red = 0,
    Orange = 1,
    Blue = 2
};


let color = Color.Orange // 1

let color2 : number = Color.Orange // 1

