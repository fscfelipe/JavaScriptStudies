
//selecina o componente 'h1' mais próximo
//a variável não pode ser const, por que iremos modificá-la
//nomes de variáveis não podem ser iguais ao de outros
//arquivos scripts.js que estejam sendo carregados no HTML
let myHeadingChange = document.querySelector('h1');
//para selecionar uma classe, adicionar '.nomeClasse'
let willBeHided = document.querySelector('.willBeHided');
let makeChecklist = document.getElementById('makeChecklist');

const myChangeH1 = document.getElementById('myChangeH1');
const myBtnChangeH1tc = document.getElementById('myBtnChangeH1tc');
const myBtnChangeH1in = document.getElementById('myBtnChangeH1in');
const myMakeMeChecklist = document.getElementById('myMakeMeChecklist');
const hideAll = document.getElementById('hideAll');

//A diferença entre .textContent e .innerHTML é que o inner
//muda todo o conteúdo dentro de uma tag, mesmo que tenha outras
//tags dento da tag a ser mudada
myBtnChangeH1tc.addEventListener('click', () => {
    myHeadingChange.textContent = myChangeH1.value;
});

myBtnChangeH1in.addEventListener('click', () => {
    myHeadingChange.innerHTML = myChangeH1.value;
});

//Podemos mudar atributos de componentes HTML
//Element.attribute
myMakeMeChecklist.addEventListener('click', () => {
    makeChecklist.type = "checkbox";
});

//Aqui iremos esconder elementos 'hide'
hideAll.addEventListener('click', () => {
    //Isso da para ser aprimorado
    if(willBeHided.style.display === "none"){
        hideAll.textContent = 'Hide All';
        willBeHided.style.display = "block";
    }else{
        hideAll.textContent = 'Show all';
        willBeHided.style.display = "none";
    }
});

//Outras funções
// - document.createElement() 
//para adicionar esse novo elemento no documento
//deve ser utilizado a função .appendChild()
//e para eliminar usar .removeChild()
//alguns parâmetros devem ser utilizados caso
//queira escolher as posições final ou inicial.