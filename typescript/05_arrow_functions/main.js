// 
// JS
//
function ma_function() {
    console.log("hello world");
}
// fonction variabilisée
function mafunction() { }
function (message) {
    console.log("hello world");
}
;
// déclarer une fonction
var dolog = function () { return console.log("hello world"); }; // sans argument
var dolog2 = function () { return console.log("hello world"); }; // avec argument
dolog(); // appel de la fonction
var square_number = function (my_number) { return my_number * my_number; };
var result5 = square_number(4);
