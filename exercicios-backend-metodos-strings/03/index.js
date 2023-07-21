const texto = "Aprenda programar do zero na Cubos Academy";

const formataTexto = (texto) => {
    let textoForm = texto.toLowerCase().split(" ");
    
    let urlAmigavel = "";
    for(let i = 0; i <= textoForm.length - 1; i++) {
        if(i == textoForm.length - 1) {
            urlAmigavel += textoForm[i];
        } else {
            urlAmigavel += textoForm[i] + "-"
        }
    }
    
    console.log(urlAmigavel);
}

formataTexto(texto);