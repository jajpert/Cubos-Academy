create database ecommerce;

create table clientes (
    cpf char(11) primary key,
    nome varchar(150)
);

create table vendedores(
    cpf char(11) primary key,
    nome varchar(150)
);

create table categorias (
    id serial primary key,
    nome varchar(50)
);

create table produtos (
    id serial primary key,
    nome varchar(100),
    descricao text,
    preco int,
    quantidade_em_estoque int,
    categoria_id int not null references categorias(id)
);

create table pedidos (
    id serial primary key,
    valor int,
    cliente_cpf char(11) not null references clientes(cpf),
    vendedor_cpf char(11) not null references vendedores(cpf)
);

create table itens_do_pedido (
    id serial primary key,
    pedido_id int not null references pedidos(id),
    quantidade int not null,
    produto_id int not null references produtos(id)
);