function buscarEndereco(){
    let cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP inválido! Digite um CEP com 8 números.");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }
            document.getElementById('logradouro').innerText = data.logradouro || 'Não disponivel'; // innerText significa alterar ou atualizar
            document.getElementById('bairro').innerText = data.bairro || 'Não disponivel';
            document.getElementById('cidade').innerText = data.localidade || 'Não disponivel';
            document.getElementById('estado').innerText = data.uf || 'Não disponivel';
            document.getElementById('regiao').innerText = data.regiao || 'Não disponivel';
        })
        .catch(error => alert("Erro ao buscar o endereço. Tente novamente!"));
}