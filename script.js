// Dados simulados de salas e reservas
let salas = [
  { nome: 'Sala A', capacidade: 10, disponivel: true },
  { nome: 'Sala B', capacidade: 20, disponivel: false },
  { nome: 'Sala C', capacidade: 15, disponivel: true }
];

let reservas = [];

// Função para consultar disponibilidade de salas
function consultarDisponibilidade() {
  let data = document.getElementById('data').value;
  let hora = document.getElementById('hora').value;
  
  let salasDisponiveis = salas.filter(sala => sala.disponivel);
  
  document.getElementById('salasDisponiveis').innerHTML = '<h3>Salas Disponíveis:</h3>';
  salasDisponiveis.forEach(sala => {
    document.getElementById('salasDisponiveis').innerHTML += `<p>${sala.nome} (Capacidade: ${sala.capacidade})</p>`;
  });
}

// Função para reservar uma sala
function reservarSala() {
  let nomeEvento = document.getElementById('nomeEvento').value;
  let dataReserva = document.getElementById('dataReserva').value;
  let horaReserva = document.getElementById('horaReserva').value;
  let participantes = document.getElementById('participantes').value;
  
  let salaSelecionada = salas.find(sala => sala.nome === 'Sala A'); // Simulando seleção de sala
  
  if (salaSelecionada) {
    salaSelecionada.disponivel = false;
    reservas.push({ sala: salaSelecionada, nomeEvento, dataReserva, horaReserva, participantes });
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('mensagem').innerText = `Reserva realizada com sucesso para ${nomeEvento} na ${salaSelecionada.nome}`;
  } else {
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('mensagem').innerText = 'Erro ao reservar sala. Tente novamente.';
  }
}
