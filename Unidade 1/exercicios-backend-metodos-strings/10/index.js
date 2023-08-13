const nomeArquivo = 'Foto da Familia.png';

const validaArquivo = (arquivo) => {
    let finalArquivo = arquivo.lastIndexOf('.');
    let tipoArquivo = arquivo.slice(finalArquivo + 1);

    if(tipoArquivo == 'jpg' || tipoArquivo == 'jpgeg' || tipoArquivo == 'gif' || tipoArquivo == 'png') {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

validaArquivo(nomeArquivo);