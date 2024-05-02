/**Adicionar o link do jquary para  transções*/
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});/**Isso aqui é pra barra de nageção funcionar quando vc clicar nele no mobile */
