const apiKey = 'ae4665c61651d3876012dbe43ddf47de'; // Sua chave de API
const cidade = 'São Paulo'; // Exemplo de cidade
const baseURL = 'https://api.climatempo.com.br/api/v1/forecast/locale/';
const localeId = '3477'; // ID da cidade (exemplo para São Paulo)

const url = `${baseURL}${localeId}/current?token=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição de dados');
    }
    return response.json(); // Converte a resposta em JSON
  })
  .then(data => {
    console.log(data); // Exibe os dados de clima no console
    // Aqui você pode processar os dados, como mostrar a temperatura:
    const temperatura = data.data.temperature; // Exemplo de como acessar a temperatura
    console.log(`Temperatura atual em ${cidade}: ${temperatura}°C`);
  })
  .catch(error => {
    console.error('Erro ao buscar os dados:', error);
  });
