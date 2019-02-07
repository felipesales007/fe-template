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

    // validação
    $("#idForm").validate();

    // para os selects personalizados
    if ($(".selectpicker").length != 0) {
        $(".selectpicker").selectpicker();
    }

    // notificação
    $("#idForm").submit(function() {
        if ($(this).valid()) {
            $(".fe-btn-carregando").removeClass("fe-hide");
            showNotification("top", "center", "ti-email", "Notificação");
        }
    });

    //em teste
   /*
    $("*").submit(function() {
        if ($(".selectpicker").hasClass('error')) {
            $(".bootstrap-select").addClass("selectpicker-error");
        } else {
            $(".bootstrap-select").removeClass("selectpicker-error");
        }
    });


    $('.dropdown-menu li').on('click',function() {
       
    });



 
    $("*").submit(function() {
        if ($(".selectpicker").hasClass('error')) {
            $(".bootstrap-select").addClass("selectpicker-error");
        } else {
            $(".bootstrap-select").removeClass("selectpicker-error");
        }
    });

    
    $('.bootstrap-select').on('click',function() {
        $(this).removeClass('selectpicker-error');
    });


    
    $(".dropdown-menu li").click(function() {
        $(this).$(".bootstrap-select").removeClass('selectpicker-error');
    });

    $("*").submit(function() {
        if($(".selectpicker").hasClass("error") && $(".bootstrap-select").querySelector("span")) {
            $(".bootstrap-select").addClass("selectpicker-error");
        } else {
            $(".bootstrap-select").removeClass("selectpicker-error");
        }
    });
    */
});

// para noficicação
function showNotification(posicao, lado, icone, mensagem) {
    $.notify({
        icon: icone,
        message: mensagem
    }, {
        type: type[2],
        placement: {
            from: posicao,
            align: lado
        }
    });
}