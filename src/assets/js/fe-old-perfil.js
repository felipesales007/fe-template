// para animar o scroll
$(document).ready(function() {
    var scrollLink = $(".fe-scroll-trigger");

    scrollLink.bind("click", function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top
        }, 1000, function() {
            location.hash = target;

            $("html").removeClass("nav-open");
            mobile_menu_visible = 0;

            $layer = $('<div class="close-layer"></div>');
            $toggle = $(".navbar-toggle");

            setTimeout(function() {
                $layer.remove();
                $toggle.removeClass("toggled");
            }, 500);
        });
        return false;
    });

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });
}).scroll();

// confirmação em mensagem para contato
$("#fe-perfil-enviar-mensagem").submit(function() {
    if ($(this).valid()) {
        $(".fe-btn-carregando").removeClass("fe-hide");
        showNotification("top", "center", "ti-email", "Mensagem enviada com sucesso");
    }
});

// para inicializar o Google Maps
function initMap() {
    var map;
    var local = { lat: -12.939607, lng: -38.441598 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: local,
        zoom: 13,
    });

    new google.maps.Marker({
        position: local,
        map: map,
        title: "Minha localização"
    });
}

// para focar no input de enviar mensagem
$(".fe-focus-mensagem-nome").click(function() {
    setTimeout(function() {
        document.getElementById("nome-visitante").focus();
    }, 1500);
});

// para mostrar mais experiências
$(function() {
    $(".fe-exp-perfil").slice(0, 2).show();
    $("#fe-mostrar-exp").on('click', function(e) {
        e.preventDefault();

        $(".fe-exp-perfil:hidden").slice(0, 1).slideDown();
        if ($(".fe-exp-perfil:hidden").length == 0) {
            $("#fe-mostrar-exp").fadeOut('slow');
        }
        $('html, body').animate({
            scrollTop: $(this).offset().top - 460
        }, 600);
    });
});

// para mostrar mais portfólio
$(function() {
    $(".fe-card-portfolio-mostrar").slice(0, 8).show();
    $("#fe-mostrar-portfolio").on('click', function(e) {
        e.preventDefault();

        $(".fe-card-portfolio-mostrar:hidden").slice(0, 4).slideDown();
        if ($(".fe-card-portfolio-mostrar:hidden").length == 0) {
            $("#fe-mostrar-portfolio").fadeOut('slow');
        }
        $('html, body').animate({
            scrollTop: $(this).offset().top - 460
        }, 600);
    });
});