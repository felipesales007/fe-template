perfil = {
    modal: function(type) {
        if (type == "rodape-dev-contato") {
            swal({
                html: `
                <div class="card-user fe-dev-contato">
                    <!-- foto -->
                    <div class="image">
                        <div class="fe-background-rodape"></div>
                    </div>
                    <!-- corpo -->
                    <div class="card-content">
                        <!-- nome -->
                        <div class="author">
                            <img class="avatar border-white" src="../../assets/img/perfil/usuario/felipe.png">
                            <p class="card-title">
                                Felipe Sales
                                <br>
                                <small>Desenvolvedor Front-End</small>
                                <br>
                            </p>
                        </div>
                        <!-- frase -->
                        <p class="description text-center">
                            Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.
                            <p>
                                <a href="#" target="_blank" class="fe-cor-tema fe-right">- Thales Valentim</a>
                                <i class="far fa-edit fe-cor-tema fe-right"></i>&ensp;
                            </p>
                        </p>
                        <!-- visualizar perfil -->
                        <div>
                            <a href="#" class="btn btn-wd btn-info">
                                <span class="btn-label">
                                    <i class="ti-search"></i>
                                </span>
                                visualizar perfil
                            </a>
                        </div>
                        <br>
                    </div>
                    <hr>
                    <!-- social -->
                    <div class="text-center">
                        <div class="row">
                            <div class="fe-social-icons">
                                <a title="LinkedIn" href="https://www.linkedin.com/in/felipesales007" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a title="GitHub" href="https://github.com/felipesales007" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a title="Facebook" href="https://www.facebook.com/felipesales007" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a title="YouTube" href="https://www.youtube.com/user/FelipeSales007/videos" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a title="E-mail" href="#contato" class="fe-scroll-trigger">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`,
                width: 350,
                showCloseButton: true,
                showConfirmButton: false
            });
        }
    }
}