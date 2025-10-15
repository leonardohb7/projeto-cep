import { mostrarModal, maskCep } from "./util.js";

const cepInput = document.querySelector('#cep')
const buscarCepBtn = document.querySelector('#buscarCep')
const enderecoForm = document.querySelector('#enderecoForm')
const bMostrarDados = document.querySelector('#mostrarDados')

//chamar a função de aplicar máscara
maskCep(cepInput);