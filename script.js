const projetos = [
  {
    titulo: 'Meu Primeiro Site',
    descricao: 'Um site simples criado para praticar HTML, CSS e JavaScript.',
    link: '#'
  },
  {
    titulo: 'Lista de Tarefas',
    descricao: 'Aplicação para organizar tarefas diárias com interface limpa.',
    link: '#'
  },
  {
    titulo: 'Portfólio Pessoal',
    descricao: 'Projeto que mostra meus conhecimentos e meus trabalhos.',
    link: '#'
  }
];

const listaProjetos = document.getElementById('lista-projetos');

if (listaProjetos) {
  projetos.forEach((projeto) => {
    const card = document.createElement('div');
    card.className = 'projeto-card';
    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
    `;
    listaProjetos.appendChild(card);
  });
}
