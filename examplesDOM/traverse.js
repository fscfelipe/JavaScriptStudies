const listUl = document.querySelector('ul');


//Tratando eventos a partir da relação entre os elementos
listUl.addEventListener('click', (event) => {
    //verifica se foi clicado em um elemento do tipo <button>
    //dentro da tag <ul>. 
    //OBS.: sempre ficar atento a essas relações. Pois se tivessem
    //outros botões dentro da tag, que fosse para outras ações
    //esses outros botões também iriam assumir a função de 
    //remover o filho.
    if(event.target.tagName == 'BUTTON'){
        //Nesse caso <li> é pai de <button>
        let li = event.target.parentNode;
        //<ul> é pai de <li>
        let ul = li.parentNode;
        //remove o filho de <ul> que é <li> de onde foi pressionado o botão
        ul.removeChild(li);
    }
});