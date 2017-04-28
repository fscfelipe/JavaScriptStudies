const paragraphItems = document.getElementsByTagName('p');

//Todosos elementos HTMl que possuírem a tag <p> irão
//ter os efeitos desse eventos.
// for(let i=0 ; i < paragraphItems.length ; i++){
//     paragraphItems[i].addEventListener('mouseover', () => {
//         paragraphItems[i].textContent = paragraphItems[i].textContent.toUpperCase();
//     } );

//     paragraphItems[i].addEventListener('mouseout', () => {
//         paragraphItems[i].textContent = paragraphItems[i].textContent.toLowerCase();
//     } );
// }

//Para passarmos eventos para elementos específicos
//podemos usar a tag <div>. Nesse caso temos a tag 'willBeHided'
//que são todos os elementos que estão na página, incluindo botões.
//perceba também, que passei o objeto 'event' por parâmetro
//pois iremos usar suas funções. Nesse caso iremos verificar se 
//o elemento (target) name é igual a <p> pois só queremos que
//o evento trate desses elementos dentro dessa <div>

//Aqui existe um conceito em que, a função que existe no nó 'pai'
//será executada no nó 'filho', então se adicionarmos mais um
// <p> dentro da tag <div>, esse novo elemento será afetado pelo
//evento. O que não ocorre no exemplo comentado acima.

willBeHided.addEventListener('mouseover', (event) => {
    if(event.target.tagName == 'P'){
        event.target.textContent = event.target.textContent.toUpperCase();
    }
} );

willBeHided.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'P'){
        event.target.textContent = event.target.textContent.toLowerCase();
    }
} );