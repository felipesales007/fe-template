// para o marcar o link como ativo
$(".fe-fechar-menu-mobile li").click(function() {
    $(".fe-fechar-menu-mobile li.active").removeClass("active");
    $(this).addClass("active");
});

// para copiar
$(".copiar").click(function() {
    $(".copiar").select();
    var copiar = document.execCommand("copy");
    if (copiar) {
        alert("Copiado");
    } else {
        alert("Erro ao copiar, seu navegador pode não ter suporte a essa função.");
    }
    return false;
});

// validação
$().ready(function() {
    $("#fe-perfil-enviar-mensagem").validate();
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

// para os selects personalizados
if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker();
}