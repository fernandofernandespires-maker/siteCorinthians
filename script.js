document.addEventListener('DOMContentLoaded', () => {
    const btnGrito = document.getElementById('btn-grito');
    const mensagemFiel = document.getElementById('mensagem-fiel');
    const btnHino = document.getElementById('btn-hino');
    const letraHino = document.getElementById('letra-hino');

    const gritos = [
        "VAI, CORINTHIANS!",
        "AQUI TEM UM BANDO DE LOUCO!",
        "CORINTHIANS, MINHA VIDA, MINHA HISTÓRIA, MEU AMOR!",
        "TODO PODEROSO TIMÃO!"
    ];

    btnGrito.addEventListener('click', () => {
        const aleatorio = gritos[Math.floor(Math.random() * gritos.length)];
        mensagemFiel.textContent = aleatorio;
        mensagemFiel.classList.remove('oculto');
    });

    btnHino.addEventListener('click', () => {
        letraHino.classList.toggle('oculto');
        if (letraHino.classList.contains('oculto')) {
            btnHino.textContent = "Mostrar Letra do Hino";
        } else {
            btnHino.textContent = "Ocultar Letra do Hino";
        }
    });
});
