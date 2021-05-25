'use strict'

const openModal = () => document.querySelector('#modal')
    .classList.add('active')
                                
const closeModal = () => document.querySelector('#modal')
    .classList.remove('active')
                                                               

document.querySelector('#cadastrarCliente')
    .addEventListener('click', openModal)

document.querySelector('#closeModal')
    .addEventListener('click', closeModal)