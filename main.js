$(document).ready(function(){

    $('.ListaDeTarefas').click(function(){
        $('#divAddTarefa').slideDown();
    })

    $('#divAddTarefa').on('submit',function(e){
        e.preventDefault();
        var tarefaInput = $('.inputTarefa').val();
        var novaTarefa = $('<li style="text-decoration: none"></li>');
        $(`<p><a class='tarefaFeita' href="#">${tarefaInput}</a></p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
    })

    $('li p').click(function(){
        alert('TA FUNCIONANDO');
    })
})

