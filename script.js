let matriz = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
]

const input = document.getElementById('input');
const output = document.getElementById('output');
const btnCriptografar = document.getElementById('btnCriptografar');
const btnDescriptografar = document.getElementById('btnDecript'); 
const btnCopy = document.getElementById('btnCopy');
const outputDefaultDiv = document.getElementById('OutputDefault');
const outputPrintDiv = document.getElementById('OutputPrint');
const pattern = /^[a-z.,!?;:'"-\s]+$/gm;
const error = document.getElementById('error');
const errorMsg = document.getElementById('errorMsg');
const attentionMsg = document.getElementById('attentionMsg');
let copy01 = document.getElementById('copy01');
copy01.innerHTML = 'Copiar'



function toggleOutput() {
    if (outputPrintDiv.classList.contains('hide')) {
        outputPrintDiv.classList.add('show');
        outputDefaultDiv.classList.add('hide');
    }

    if (outputPrintDiv.classList.contains('show')) {
        outputPrintDiv.classList.remove('hide');
    }
}

function handleSubmit() {
    if(input.value == '') {
        return false;
    }
}

btnCriptografar.addEventListener('click', function(event) {
    let inputValue = input.value;
    let valorCripto = inputValue;
    
    for (let i = 0; i < matriz.length; i++) {
        if(inputValue.includes(matriz[i][0])) {
            valorCripto = valorCripto.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    
    if (inputValue == '') {
        errorMsg.innerHTML = 'Digite alguma mensagem'
        error.classList.add('show', 'animate__animated', 'animate__slideInUp')
        setTimeout(() => {
            error.classList.remove('animate__slideInUp', 'show')
        }, "2000");
        return false;
    }

    if (!inputValue.match(pattern)) {
        // error.innerHTML = 'Não deu match'
        attentionMsg.classList.add('animate__animated', 'animate__shakeX')
        attentionMsg.style.color = "#ff0000"
        setTimeout(() => {
            attentionMsg.classList.remove('animate__animated', 'animate__shakeX')
            attentionMsg.style.color = null;
        }, "2000");
        return false;
    }


    output.innerHTML = valorCripto
    toggleOutput();
    scrollBottom();
})

btnDescriptografar.addEventListener('click', function() {
    let inputValue = input.value;
    let valorDecript = inputValue;
    
    for (let i = 0; i < matriz.length; i++) {
        if(inputValue.includes(matriz[i][1])) {
            valorDecript = valorDecript.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    
    output.innerHTML = valorDecript
    scrollBottom();
})

btnCopy.addEventListener('click', function(event) {
    let copy02 = document.getElementById('copy02')
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    textarea.value = output.innerHTML;
    textarea.select();
    textarea.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textarea.value)
    document.body.removeChild(textarea)

    if (event.currentTarget) {
        copy01.innerHTML = ''
        copy02.innerHTML = 'Texto Copiado!'
        setTimeout(() => {
            copy02.innerHTML = ''
            copy01.innerHTML = 'Copiar'
        }, "1500");
    }
    scrollTop();
})

function scrollBottom() {
    if (window.innerWidth <= 768) {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

function scrollTop() {
    if (window.innerWidth <= 768) {
        window.scrollTo({top:0, behavior: 'smooth'});
    }
}