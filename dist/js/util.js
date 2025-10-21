// função para normaliza o cep - ela será usada quanda formos buscar o cep
// remove tudo aquilo que não é número - deixar fixo em 8 caracteres
export function formatarCep(valor) {
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

    //  evento do botão da modal para o seu fechamento
    const elFechar = document.querySelector('#fecharModal')
    elFechar.onclick = () => {
        modal.classList.add('hidden')
        modal.classList.remove('flex')
        setTimeout(()=>{
            modal.classList.add('opacity-0')
            modal.classList.remove('opacity-100')
        }, 300)
    }
}

// função para limpar todos os campos do formulário
export function limparCampos() {
    //pegar o formulário
    const form = document.querySelector('#enderecoForm')
    // para limpar vamos percorrer o form com um forEach para cada input
    form.querySelectorAll('input').forEach(input => input.value = '')
}

// função a para mascara no CEP
export function maskCep(cep) {
    cep.addEventListener('input', (evento ) => {
        let value = evento.target.value.replace(/\D/g, '')
        if(value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8)
        }
    
        // atualizando a visualição do elemento HTML(input), ja no formato de cep 
        evento.target.value = value;
    })
}