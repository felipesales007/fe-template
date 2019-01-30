<?php
    header("Content-type: text/css");

    $foto_temp = "../../assets/img/perfil/usuario/felipe.png";
    if ($foto_temp != "") {
        $foto  = "url('$foto_temp')";
    }

    $imagem_lateral_temp = "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg";
    if ($imagem_lateral_temp != "") {
        $imagem_lateral  = "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url('$imagem_lateral_temp')";
    }

    $imagem_rodape_temp = "https://img.elo7.com.br/product/zoom/FBCE34/adesivo-paisagem-praia-decorando-com-adesivos.jpg";
    if ($imagem_rodape_temp != "") {
        $imagem_rodape  = "url('$imagem_rodape_temp')";
    }

    $cor_tema  = "#66615b";
    $cor_link  = "#ef8157";  
    $cor_foto  = "#887d6e";  
    $cor_a     = "#824027";
    $cor_barra = "#f4f3ef";
?>

.fe-foto,
.fe-foto-barra {
    background-image: <?php echo $foto; ?>;
}

.sidebar[data-background-color="tema"]:after,
.sidebar[data-background-color="tema"]:before,
.off-canvas-sidebar[data-background-color="tema"]:after,
.off-canvas-sidebar[data-background-color="tema"]:before {
    background-color: <?php echo $cor_tema; ?>;
    background-image: <?php echo $imagem_lateral; ?>;
}

.fe-background-rodape {
    background-color: <?php echo $cor_tema; ?>;
    background-image: <?php echo $imagem_rodape; ?>;
}

.sidebar[data-background-color="tema"][data-active-color="tema"] .nav li.active>a,
.off-canvas-sidebar[data-background-color="tema"][data-active-color="tema"] .nav li.active>a {
    color: <?php echo $cor_link; ?>;
}

.fe-foto {
    border: 8px solid <?php echo $cor_foto; ?>;
}

.fe-cor-tema {
    color: <?php echo $cor_tema; ?>;
}

a:hover,
a:focus,
a:active {
    color: <?php echo $cor_a; ?>;
}

@media only screen and (max-width: 992px) {
    .fe-menu-perfil-mobile {
        background-color: <?php echo $cor_barra; ?>;
    }
    .fe-menu-perfil-mobile span {
        background-color: <?php echo $cor_tema; ?> !important;
    }
}