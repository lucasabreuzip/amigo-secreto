let amigos = [];

// FUNÇÃO PARA ADICIONAR AMIGO
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado. Por favor, insira um nome diferente.');
        document.getElementById('amigo').value = '';
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    document.getElementById('amigo').value = '';
}

// ATULIZA A LISTA DE AMIGOS
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// SORTEIO DO AMIGO
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}

// FOI ADICIONADO O BOTÃO RESETAR
function resetar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}