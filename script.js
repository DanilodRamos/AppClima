document.getElementById('buscar').addEventListener('click', function() {
    const cidade = document.getElementById('cidade').value;  // Pega o valor digitado na caixa de texto
    if (!cidade) {  // Se não houver cidade digitada
        alert("Por favor, digite o nome de uma cidade!");
        return;
    }

    const apiKey = '2fdd45761b80bfe5ccf7b7790d581431'; // Sua chave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {  // Se a requisição for bem-sucedida
                const nomeCidade = data.name;
                const descricao = data.weather[0].description;
                const temperatura = `${data.main.temp}°C`;
                const umidade = `Umidade: ${data.main.humidity}%`;

                // Exibe os dados no HTML
                document.getElementById('nome-cidade').textContent = nomeCidade;
                document.getElementById('descricao').textContent = descricao;
                document.getElementById('temperatura').textContent = temperatura;
                document.getElementById('umidade').textContent = umidade;
            } else {
                alert("Cidade não encontrada!");
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao buscar o clima.");
        });
});
