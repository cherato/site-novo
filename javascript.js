// Função para carregar o arquivo de rodapé com base na largura da tela
function carregarRodape() {
    let footerFile = '';

    // Verifica a largura da tela
    if (window.innerWidth <= 420) {
        footerFile = 'footermobile.html';  // Arquivo para mobile
    } else {
        footerFile = 'footer.html';  // Arquivo para desktop
    }

    // Carregar o arquivo correto usando fetch API
    fetch(footerFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('rodape').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

// Chama a função ao carregar a página
carregarRodape();

// Adiciona um listener para verificar mudanças de redimensionamento da janela
window.addEventListener('resize', carregarRodape);

// Função para mostrar/ocultar o menu de navegação
function toggleMenu() {
    const menu = document.getElementById('header_menu');
    
    // Verifica se o menu está visível e alterna a classe de exibição
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'; // Esconder o menu
    } else {
        menu.style.display = 'flex'; // Mostrar o menu
    }
}

// Adiciona um evento de clique no ícone "burger" para alternar o menu
document.getElementById('icon_burger').addEventListener('click', toggleMenu);
