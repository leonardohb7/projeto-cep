import { formatarCep, mostrarModal } from "./util.js";

// função principal para buscar o cep = via API devemos usar o async

export async function buscarCep() {
    const campoCep = document.querySelector('#cep')

    // limpar o cep para tirar o traço e ficar apenas com numeros
    const cep = formatarCep(campoCep.value)

    // verificar se temos 8 digitos
    if(cep.length === 8) {
        try { 

            //tentar executar esse bloco de comando, se não conseguir executa o catch
            // o await faz o js eperar a promise do fetch ser resolvida
            // quando for resolvido armazena a resposta na constante res
            // recebe :
            // res.ok - retorna true *se* a requisicao deu certo
            // res.status - condição da resposta (404 - not found, 200 - ok, 500 - server error)
            // res.json() - metodo para converter a resposta em formato json
            const res = await fetch(`http://viacep.com.br/ws/${cep}/json/`)

            // manipular o res.json
            // o metodo json le o corpo da resposta e atribui um objeto json a const data
            // como essa conversão também é assincrona, usamos novamente o await
            const data = await res.json();

            // verificar se APi não retornou nenhum erro
            if (!data.err) {
                //preencher os campos com os dados da API
                document.querySelector('#logradouro').value = data.logradouro
                document.querySelector('#bairro').value = data.bairro
                document.querySelector('#cidade').value = data.localidade
                document.querySelector('#estado').value = data.uf

                // dando foco no campo de numero
                document.querySelector('#numero').focus();
            } else {
                // mostrar o alert caso o cep nao seja encontrado
                mostrarModal('CEP não foi encontrado, tente novamente')
            }

        } catch (error) {
            // mostrar o alert caso a requisicao falhe
            mostrarModal('Erro ao buscar o CEP. Tente novamente mais tarde.')
        }
    }

    else {
        // caso o numero de digitos seja menor que 8
        mostrarModal('Digite um CEP com 8 digitos!')
        // foco no CEP
        campoCep.focus()
    }
}