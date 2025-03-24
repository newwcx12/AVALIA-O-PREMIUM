document.addEventListener("DOMContentLoaded", function () {
    let saldoAtual = 0.00; // Saldo inicial
    let totalAvaliacoes = document.querySelectorAll(".brand").length;
    let avaliacoesFeitas = 0;

    document.querySelectorAll(".stars").forEach(starContainer => {
        starContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("star")) {
                let valor = parseInt(event.target.getAttribute("data-value"));
                atualizarEstrelas(starContainer, valor);

                if (!starContainer.dataset.avaliado) {
                    starContainer.dataset.avaliado = "true";
                    avaliacoesFeitas++;

                    // Atualiza o saldo
                    saldoAtual += 16.665;
                    document.getElementById("valorSaldo").textContent = saldoAtual.toFixed(2);

                    mostrarNotificacao(); // Exibe a notificação personalizada

                    // Cria a caixa de opinião após a avaliação
                    criarCaixaOpiniao(starContainer);
                }

                if (avaliacoesFeitas === totalAvaliacoes) {
                    document.getElementById("finalizarAvaliacao").classList.remove("hidden");
                }
            }
        });
    });

    function atualizarEstrelas(starContainer, valor) {
        let estrelas = starContainer.querySelectorAll(".star");
        estrelas.forEach((estrela, index) => {
            estrela.src = index < valor ? "images/estrela_cheia.png" : "images/estrela_vazia.png";
        });
    }

    // Função para criar a caixa de opinião
    function criarCaixaOpiniao(starContainer) {
        // Verifica se a caixa de opinião já existe
        if (!starContainer.querySelector('.opinion-box')) {
            let opinionBox = document.createElement('div');
            opinionBox.classList.add('opinion-box');

            let textArea = document.createElement('textarea');
            textArea.setAttribute('placeholder', 'Qual sua opinião?');
            textArea.classList.add('opinion-input');

            opinionBox.appendChild(textArea);
            starContainer.appendChild(opinionBox);

            // Exibe a caixa de opinião
            opinionBox.style.display = 'block';
        }
    }

    // Função para mostrar notificação
    function mostrarNotificacao() {
        let notification = document.getElementById("notification");
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000); // A notificação desaparece após 3 segundos
    }

    document.getElementById("finalizarAvaliacao").addEventListener("click", function () {
        window.location.href = "recebimento.html"; // Redireciona para a página de recebimento
    });
});
