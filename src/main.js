

// Função para calcular a contagem regressiva
function countdown() {
    // Data alvo para a contagem regressiva (altere conforme necessário)
    var targetDate = new Date('2024-06-28').getTime();

    // Atualiza a contagem regressiva a cada segundo
    var interval = setInterval(function() {
        // Data atual
        var currentDate = new Date().getTime();
        
        // Calcula a diferença entre as datas
        var difference = targetDate - currentDate;
        
        // Calcula os dias, horas, minutos e segundos restantes
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Atualiza o conteúdo do elemento de contagem regressiva
        var countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;
        
        // Verifica se a contagem regressiva chegou ao fim
        if (difference < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "EXPIRADO";
        }
    }, 1000); // Atualiza a cada segundo
}

// Chama a função de contagem regressiva quando a página é carregada
window.onload = function() {
    countdown();
};

document.addEventListener('DOMContentLoaded', function() {
    // Adicione um evento de clique ao botão
    document.getElementById('scrollButton').addEventListener('click', function(event) {
        event.preventDefault(); // Para evitar o comportamento padrão do link
        
        // Obtenha a posição da última seção
        const lastSection = document.querySelector('.fourthSection');
        
        // Role a página até a última seção
        lastSection.scrollIntoView({ behavior: 'smooth' });
    });
});
