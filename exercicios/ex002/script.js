// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    // Captura os valores dos campos
    const nome = document.getElementById('iname').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('imsg').value;
    
    // Cria um objeto com os dados
    const dados = {
      nome: nome,
      email: email,
      mensagem: mensagem,
      data: new Date().toLocaleString()
    };
    
    // Armazena no localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(dados);
    localStorage.setItem('contatos', JSON.stringify(contatos));
    
    // Exibe no console
    console.log('Formulário enviado:', dados);
    
    // Mostra mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    
    // Limpa o formulário
    form.reset();
  });
});
