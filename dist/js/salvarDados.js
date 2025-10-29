import { mostrarModal, limparCampos } from "./util.js";

// função para salvar os dados no Storage do Browser
//recebe como parâmetro o evento do formulário
export function salvarDados(event){
    // cancelar o envio do formulário
    event.preventDefault();

    // recuperar os dados
    const nome = document.querySelector('#nome').value;
    const cep = document.querySelector('#cep').value;
    const logradouro = document.querySelector('#logradouro').value;
    const numero = document.querySelector('#numero').value;
    const complemento = document.querySelector('#complemento').value;
    const bairro = document.querySelector('#bairro').value;
    const cidade = document.querySelector('#cidade').value;
    const estado = document.querySelector('#estado').value;

    // colocando os dados em um array
    const usuario = {
        nome, cep, logradouro, numero, complemento, bairro, cidade, estado
    }
    

     // colocar as informações no localStorage
     // permite o armazenamento apenas de STRINGS
     // limite de 5MB por aplicação
     // localStorage.getItem() = buscar o valor defenido no array de usuarios (NO BROWSER)
     // nao existindo, retorno null
     // JSON.parse converte essa string Json em um objeto js (array)
     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

     // agora garante que usarios existe, mesmo sendo []
     // inserindo os objetos do local storage o array de usuarios criado acima
     usuarios.push(usuario)

     localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // O localStorage só armazena string - por isso o JSON.stringify é ncessário
    // ele irá converter essa string em um objeto
    // cuidado, a montagem do objeto é sincrona - Em objetos grandes ele poderá demorar
    // e assim deixar a aplicação mais lenta
      
    //  chamar a modal para dizer q os dados foram salvos - limparCampos
    mostrarModal('Dados salvos com sucesso!')
    limparCampos()

    // chamar a função para mostrar os dados
    mostrarDados();
}

// funcao para exibir os dados do Storage

export function mostrarDados() {
   const container = document.querySelector('#cardsContainer')

   // limpar para nao repetir os cards
   container.innerHTML='';

   // buscar os dados armazenados, se existir
   const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

   // verificando se retornou um array vazio
   if (usuarios.lenght === 0) {
        mostrarModal('Não existem dados gravados.')
        return
   }

   // se o array tiver dados, iremos monstar, para cada objeto, um card
   usuarios.forEach(usuario => {
        container.innerHTML += `
        <div class="rounded shadow-md p-6 border hover:shadow-lg transition-shadow duration-300 text-amber-300">
            <h3 class="text=2xl font-semibold text-amber-700 mb-4 capitalize">${usuario.nome}</h3>
            <p class="mb-1 font-medium">CEP: ${usuario.cep}</p>
            <p class="mb-1 font-medium">Endereço: ${usuario.logradouro} - ${usuario.numero}</p>
            <p class="mb-1 font-medium">Complemento: ${usuario.complemento}</p>
            <p class="mb-1 font-medium">Bairro: ${usuario.bairro}</p>
            <p class="mb-1 font-medium">Cidade: ${usuario.cidade}</p>
            <p class="mb-1 font-medium">Estado: ${usuario.estado}</p>
        </div>
        `
   });


}