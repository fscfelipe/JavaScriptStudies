const listUl = document.querySelector('ul');
const addListItem = document.getElementById('addListItem');
const btnAddListItem = document.getElementById('btnAddListItem');

//Aqui pego todos os 'filhos'<li> do elemento 'pai'<ul> 
const lis = listUl.children;

//Temos essas duas funções que podem ser importantes
//pega o primeiro e o último filho
const firstItemChildren = listUl.firstElementChild;
const lastItemChildren = listUl.lastElementChild;

firstItemChildren.style.backgroundColor = 'lightskyblue';
lastItemChildren.style.backgroundColor = 'lightsteelblue';

//Aqui eu adiciono os botões para os elementos que já tinham
//sido criados no documento
for(let i=0 ; i < lis.length ; i++){
    attachListItemButton(lis[i]);
}

//Tratando eventos a partir da relação entre os elementos
listUl.addEventListener('click', (event) => {
    //verifica se foi clicado em um elemento do tipo <button>
    //dentro da tag <ul>. 
    //OBS.: sempre ficar atento a essas relações. Pois se tivessem
    //outros botões dentro da tag, que fosse para outras ações
    //esses outros botões também iriam assumir a função de 
    //remover o filho.
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == 'remove'){
            //Nesse caso <li> é pai de <button>
            let li = event.target.parentNode;
            //<ul> é pai de <li>
            let ul = li.parentNode;
            //remove o filho de <ul> que é <li> de onde foi pressionado o botão
            ul.removeChild(li);
        }
        if(event.target.className == 'up'){
            let li = event.target.parentNode;
            //Aqui pegamos o 'irmão' que vem antes do <li> tratado
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            
            //aqui testamos para ver se prevLi não é o primeiro
            //por que se for, nada acontece
            if(prevLi){
                //colocamos o <li> tratado em uma posição antes, ou acima
                //do irmão que estava nessa posição
                ul.insertBefore(li, prevLi);
            }
        }
        if(event.target.className == 'down'){
            let li = event.target.parentNode;
            //Dessa vez pegamos o irmão que está mais a frente
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if(nextLi){
                //aqui inserimos o irmão mais abaixo antes do mais acima.
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

//Aqui adicionamos filhos <li> ao elemento <ul> da lista
//Veja que, esses novos elementos não terão os botões de
// up, down, e remover. Precisa ser colocado também
btnAddListItem.addEventListener('click', () => {
    let ul = document.getElementById('ulId');
    let li = document.createElement('li');
    li.textContent = addListItem.value;
    attachListItemButton(li);
    ul.appendChild(li);
    addListItem.value = '';
});

//Essa função irá adicionar botões para os elementos
//da lista que forem criados
function attachListItemButton(li){
    let up = document.createElement('button');
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);
}