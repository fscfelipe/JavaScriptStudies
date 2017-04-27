//DEFINE UM VETOR DE OBJETOS
var pessoas = [
	{
		nome: 'Felipe',
		idade: '26'
	},
	{
		nome: 'Marina',
		idade: '24'
	}
];

//Printa o vetor de objetos 'pessoas'
for( var i = 0 ; i < pessoas.length ; i++){
	document.write('<p> Nome : ' + pessoas[i].nome + '<p>');
}

//substitui o valor contido na variavel pessoa
pessoas = 'Apagado';

document.write('<p> Nome : ' + pessoas + '<p>');

//Para contornar o problema anterior
//caso queira que uma variável não seja substituida
//use 'const'

const nome = 'Maria';
//a linha abaixo irá gerar um erro
//nome = 'Jose';

//as diferenças entre os tipos 'let' e 'var'
//é o escopo na qual estão inseridas

//GLOBAL
//However, global variables defined with 
//let will not be added as properties 
//on the global window object like those defined with var.
let me = 'go';  // globally scoped
var i = 'able'; // globally scoped
console.log(window.me); // undefined
console.log(window.i); // 'able'

//FUNCTION
//They are identical when used like this in a function block.
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
}

//BLOCK
//Here is the difference. 
//'let' is only visible in the for() loop
//'var' is visible to the whole function.
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
}

//REDECLARATION
//Assuming strict mode, var will let you re-declare the same
//variable in the same scope. On the other hand, let will not:
'use strict';
let melet = 'foo';
//let melet = 'bar'; // SyntaxError: Identifier 'me' has already been declared

'use strict';
var mevar = 'foo';
var mevar = 'bar'; // No problem, `me` is replaced.