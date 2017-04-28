//document.getElementById
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myInputPColor = document.getElementById('myInputPColor');
const myInputSecPColor = document.getElementById('myInputSecPColor');
const myBtnParagraph = document.getElementById('myBtnParagraph');
const myBtnPSecond = document.getElementById('myBtnPSecond');

//document.getElementsByTagName
//Para todos os elementos HTML que possuem a tag escolhida.
//Pode ser tratado como vetor.
const myParagraphs = document.getElementsByTagName('p');
const mySecParagraph = document.getElementsByTagName('p')[2];

//document.getElementsByClassName
const errorNotGreen = document.getElementsByClassName('error-not-green');

//document.querySelectorAll
//Podemos ver que as propriedades CSS também podem ser alteradas
//Element.style.prop
const evens = document.querySelectorAll('p:nth-child(even)');
for(let i=0 ; i < evens.length ; i++){
    evens[i].style.backgroundColor = 'lightgray';
}

//Veja que a função passada por parâmetro usa o conceito de Arrow Function
//Este evento faz com que, ao clicar no elemento HTML com Id = 'myHeading'
//a cor do elemento irá mudar para vermelho
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

//O valor de input em 'myTextInput' é atribuído ao myHeading
//quando o botão for clicado
myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

//Faz todos os parágrados assumirem a cor escolhida
myBtnParagraph.addEventListener('click', () => {

    //aplicar uma cor a todos os elementos de <p>
    for(let i=0 ; i < myParagraphs.length ; i++){
        myParagraphs[i].style.color = myInputPColor.value;
    }
    //Aos elementos com essa classe, recebe a cor vermelhora
    //caso sua cor não seja verde
    for(let i=0 ; i < errorNotGreen.length ; i++){
        if( errorNotGreen[i].style.color !== 'green')
            errorNotGreen[i].style.color = 'red';
    }
});

//Faz somente o parágrafo 2 mudar de cor
myBtnPSecond.addEventListener('click', () => {
    mySecParagraph.style.color = myInputSecPColor.value;
});

