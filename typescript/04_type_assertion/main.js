var message = "abc"; // le type est implicit
// let message : string = "abc";
// console.log(message.endsWith("c"));
var result = message.endsWith("c");
var message2; // type any
message2 = "text";
var result2 = message2.endsWith("t");
// je ne précise pas le type de message 2
// donc TS interprète comme un type any
// donc je n'ai pas accés aux méthodes objet de type string
// pour régier ce problème en TS
// j'aimerais explicitement dire que message2 c'est un type string 
// même si je ne l'ai pas fait au moment de sa déclaration
// solution 1 
var message3;
message3 = "text";
var result3 = message3.endsWith("t");
// solution 2
var result4 = message3.endsWith("t");
// ce qu'en précise que message3 est de type string
// pour pouvoire  avoir accés au méthodes string
