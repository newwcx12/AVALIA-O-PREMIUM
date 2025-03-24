a pagina principal é a com nome home

backup do topbar e footer

topbar
html:

<div class="top-bar">AVALIAÇÃO REMUNERADA</div>

css:

/* Barra verde no topo */
.top-bar {
    background-color: #28a745;
    color: white;
    text-align: center;
    padding: 10px 0;
    font-size: 18px;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

/* Ajuste para evitar que a barra verde cubra o conteúdo */
body {
    padding-top: 40px; /* Espaço para a barra verde */
}



footer com informaçoes
html:

<footer class="footer">
    <p>Somos uma plataforma voltada para a coleta e organização de dados com fins estatísticos e analíticos.</p>
</footer>

css:

.footer {
    font-size: 12px; /* Texto pequeno */
    color: #777; /* Cor discreta */
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8; /* Fundo suave */
    border-top: 1px solid #ddd; /* Linha sutil para separar */
}


