// Inicialização
$(document).ready(function () {
    $('.sidenav').sidenav();

    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });

    $('.materialboxed').materialbox();
});

// desativar o sidenav quando clicar fora dela

$('.sidenav li').click(() => {
    $('.sidenav').sidenav('close');
});

// colorir a navbar on scroll

$(window).on("scroll", function(){
    if($(window).scrollTop() > 100) {
        $(".navbar").addClass("nav-color");
    } else {
        $(".navbar").removeClass("nav-color");
    }
});

// Animar botoes do site
$(document).ready(function () {
    var animacaoTipo = 'animated flipOutX';
    var animacaoFim = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd animationend';

    $('a.btn-anim').on('click', function() {
        $(this).addClass(animacaoTipo).one(animacaoFim, function() {
            $(this).removeClass(animacaoTipo);
        });
    });
});