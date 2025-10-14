// função para normaliza o cep - ela será usada quanda formos buscar o cep
// remove tudo aquilo que não é número - deixar fixo em 8 caracteres
export function limparCep(valor) {
    return valor.replace(/\D/g, '').slice(0,8)
}

 // funcão para montar o modal
export function mostrarModal(message) {
    // passando a mensagem de erro a ser exibida
    const elMessage = document.querySelector('#alertMessage')
    elMessage.textContent = message;
    // fazendo a exibicao da modal
    const modal = document.querySelector('#alertModal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
    // criando a função de tempo para fazer o efeito de opacidade
    setTimeout(()=>{
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-100')
    }, 50)
}