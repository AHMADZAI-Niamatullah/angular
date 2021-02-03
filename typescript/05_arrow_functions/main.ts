// 
// JS
//

function ma_function(){
    console.log("hello world");
}


// fonction variabilisée
function mafunction = function(message){
    console.log("hello world");
};

// déclarer une fonction

let dolog = () => console.log("hello world"); // sans argument
let dolog2 = () => console.log("hello world"); // avec argument

dolog(); // appel de la fonction

let square_number = (my_number : number) : number => my_number * my_number;

let result5 : number = square_number(4);

