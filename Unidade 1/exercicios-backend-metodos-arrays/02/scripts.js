const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

const separarGrupos = (lista, tamanho) => {
    const resultado = [];

    let numeroGrupo = 1;

    for(let i = 0; i < lista.length; i += tamanho){
        const grupo = `Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho))}`;
        console.log(grupo);
        numeroGrupo += 1;
    }
}

separarGrupos(nomes, tamanhoDoGrupo);