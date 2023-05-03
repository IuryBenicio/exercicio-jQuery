
function verString(){
    var stringTarefa = document.querySelector('p a')
    console.log(stringTarefa)
}

$(document).ready(function(){

    $('.ListaDeTarefas').click(function(){
        $('#divAddTarefa').slideToggle();
    })
    var numeroTarefas = 0
    var listaTarefas = []

    $('#divAddTarefa').on('submit',function(e){
        e.preventDefault();

        numeroTarefas += 1

        var tarefaInput = $('.inputTarefa').val();

        listaTarefas.push(tarefaInput)
        console.log(listaTarefas)
        console.log(numeroTarefas)

        var novaTarefa = $('<li style="text-decoration: none"></li>');
        $(`<p><a id='tarefa ${numeroTarefas}' href="#">- ${tarefaInput}</a></p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        verString();


        $('.inputTarefa').val('')

        $(novaTarefa).click(function(){
            $(this).css({"text-decoration" : "line-through"})
            numeroTarefas -= 1
        })
    })
})

