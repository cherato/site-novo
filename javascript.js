// Função para carregar o arquivo de rodapé com base na largura da tela
function carregarRodape() {
    let footerFile = '';

    // Verifica a largura da tela
    if (window.innerWidth <= 420) {
        footerFile = 'footer.html';  // Arquivo para mobile
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
    const home_section = document.getElementById('home_section');
    const main = document.getElementById('main');

    // Verifica se o menu está visível e alterna a classe de exibição
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'; // Esconder o menu
        home_section.style.display = 'block';
        main.style.alignItems = 'flex-start';
        if (window.innerWidth <= 420) {
            main.style['justify-content'] = 'left';
        } else {
            main.style['justify-content'] = 'center';
        }
    } else {
        menu.style.display = 'flex'; // Mostrar o menu
        home_section.style.display = 'none';
        main.style.alignItems = 'flex-start';
        main.style['justify-content'] = 'right';
    }
}

// Função para fechar o menu ao clicar fora dele
function closeMenuOnClickOutside(event) {
    const menu = document.getElementById('header_menu');
    const burgerIcon = document.getElementById('icon_burger');

    // Verifica se o menu está visível
    if (menu.style.display === 'flex') {
        // Verifica se o clique foi fora do menu e fora do botão "hamburger"
        if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
            // Fecha o menu
            menu.style.display = 'none';
            document.getElementById('home_section').style.display = 'block';
            document.getElementById('main').style['justify-content'] = 'center';
        }
    }
}

// Adiciona um evento de clique no ícone "burger" para alternar o menu
document.getElementById('icon_burger').addEventListener('click', toggleMenu);

// Adiciona um evento de clique no ícone "home" para alternar o menu
document.getElementById('icon_home').addEventListener('click', toggleMenu);

// Adiciona um evento global para fechar o menu quando clicar fora
document.addEventListener('click', closeMenuOnClickOutside);

