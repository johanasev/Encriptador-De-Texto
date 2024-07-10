const entradaTexto = document.getElementById('entradaTexto');
const tituloResultado = document.getElementById('tituloResultado');
const copyBtn = document.getElementById('copyBtn');
const encriptadorBtn = document.getElementById('encriptadorBtn');
const desencriptadorBtn = document.getElementById('desencriptadorBtn');
const resultadoImg = document.getElementById('resultadoImg');
const subTexto = document.getElementById('subTexto');

const encriptar = (texto) => {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

const desencriptar = (texto) => {
    return texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

const mostrarResultado = (texto) => {
    tituloResultado.textContent = texto || "Ningún mensaje fue encontrado";
    copyBtn.style.display = texto ? 'block' : 'none';
    resultadoImg.style.display = 'none';
    subTexto.style.display = 'none';
}

encriptadorBtn.addEventListener('click', () => {
    const texto = entradaTexto.value;
    const encriptado = encriptar(texto);
    mostrarResultado(encriptado);
});

desencriptadorBtn.addEventListener('click', () => {
    const texto = entradaTexto.value;
    const desencriptado = desencriptar(texto);
    mostrarResultado(desencriptado);
});

copyBtn.addEventListener('click', () => {
    const texto = tituloResultado.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});
