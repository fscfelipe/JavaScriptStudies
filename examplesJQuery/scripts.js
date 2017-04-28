//Código em jQuery que pega os elementos <li>
//e quando ele forem clicados, seus valores de texto
//serão trocado, e após um delay, irão sumir
$('li').on('click', function(){
    $(this).text("Clicked").delay(800).fadeOut(400);
});




//Algumas das propriedades que o jQuery pode selecionar
//Element selectors
    //$('li');
    // $('a');
    // $('img');
    // $('p');

// Descendant Selectors
    // $('p a');

// Classes and IDs
    // $('.blog-post');
    // $('#about');

// Attribute Selectors, muitos
    // $([name='newsletter']);