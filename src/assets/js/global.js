$().ready(function() {
    // para pegar o ano atual
    var ano = new Date();
    document.getElementById("fe-ano-rodape").innerHTML = ano.getFullYear();

    // para o abrir e fechar dos collapse do menu lateral
    $(".fe-menu-lateral").click(function() {
        if ($("div").hasClass("in")) {
            $(".in").collapse("hide");
        } else {
            $(".in").collapse("show");
        }
    });

    // para o fechar o menu lateral quando clica no menu mobile
    $(".fe-fechar-menu-mobile").click(function() {
        $("html").removeClass("nav-open");
        $(".navbar-toggle").click();
    });

    // para mostrar tooltip
    $("*").mouseleave(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="tooltip"]').tooltip("hide");
    });
});