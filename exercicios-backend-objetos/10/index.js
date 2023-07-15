// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

//a. Adicione uma tv, dois cabos usb e uma webcam para o José
let {nome, valorEmCentavos} = tv;
let objeto = { item: nome, valorEmCentavos, quantidade: 1 };
jose.carrinho.push(objeto);

nome = caboUsb.nome;
valorEmCentavos = caboUsb.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 2};
jose.carrinho.push(objeto);

nome = webcam.nome;
valorEmCentavos = webcam.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
jose.carrinho.push(objeto);

console.log(jose);

//b. Adicione dois notebooks para o Carlos
nome = notebook.nome;
valorEmCentavos = notebook.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 2};
carlos.carrinho.push(objeto);

console.log(carlos);

//c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
nome = teclado.nome;
valorEmCentavos = teclado.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
patricia.carrinho.push(objeto);

nome = caboUsb.nome;
valorEmCentavos = caboUsb.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 2};
patricia.carrinho.push(objeto);

nome = carregador.nome;
valorEmCentavos = carregador.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
patricia.carrinho.push(objeto);

nome = mouse.nome;
valorEmCentavos = mouse.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
patricia.carrinho.push(objeto);

nome = monitor.nome;
valorEmCentavos = monitor.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
patricia.carrinho.push(objeto);

console.log(patricia);

//d. Adicione cinco webcams para o Renato
nome = webcam.nome;
valorEmCentavos = webcam.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 5};
renato.carrinho.push(objeto);

console.log(renato);

//e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
nome = caboUsb.nome;
valorEmCentavos = caboUsb.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 2};
roberto.carrinho.push(objeto);

nome = monitor.nome;
valorEmCentavos = monitor.valorEmCentavos;
objeto = {item: nome, valorEmCentavos, quantidade: 1};
roberto.carrinho.push(objeto);

console.log(roberto);