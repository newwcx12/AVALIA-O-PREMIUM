function confirmPayment() {
    // api do pix
    const paymentConfirmed = true;

    if (paymentConfirmed) {
        document.getElementById('payment-not-confirmed').style.display = 'none';
        document.getElementById('payment-instruction').style.display = 'block';
        document.getElementById('confirm-payment-btn').style.display = 'none'; // Esconde o botão após a confirmação
        openModal(); // Abre o modal com o QR Code
    } else {
        alert('Pagamento não confirmado. Tente novamente mais tarde.');
    }
}

document.getElementById('pix-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pixKey = document.getElementById('user-pix-key').value;
    const fullName = document.getElementById('full-name').value;
    const cpf = document.getElementById('cpf').value;

    if (pixKey && fullName && cpf) {
        alert('Dados enviados com sucesso! Você será redirecionado para a janela de confirmação');

        // Redirecionar para a quarta página
        window.location.href = "confirmação.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função para abrir o modal
function openModal() {
    document.getElementById('payment-modal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Função para copiar a chave Pix
function copyPixKey() {
    const pixKey = document.getElementById('pix-key').textContent;
    navigator.clipboard.writeText(pixKey).then(function() {
        alert('Chave Pix copiada!');
    }).catch(function(err) {
        alert('Falha ao copiar a chave Pix: ' + err);
    });
}
