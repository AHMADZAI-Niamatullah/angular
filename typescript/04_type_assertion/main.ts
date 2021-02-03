let message = "abc";// le type est implicit
// let message : string = "abc";

// console.log(message.endsWith("c"));

let result : boolean =  message.endsWith("c");

let message2;// type any
message2 = "text";

let result2 = message2.endsWith("t");

// je ne précise pas le type de message 2
// donc TS interprète comme un type any
// donc je n'ai pas accés aux méthodes objet de type string


// pour régier ce problème en TS

// j'aimerais explicitement dire que message2 c'est un type string 
// même si je ne l'ai pas fait au moment de sa déclaration

// solution 1 
let message3;
message3 = "text";

let result3 : boolean = (message3 as string).endsWith("t");

// solution 2
let result4 : boolean = (<string>message3).endsWith("t");

// ce qu'en précise que message3 est de type string
// pour pouvoire  avoir accés au méthodes string