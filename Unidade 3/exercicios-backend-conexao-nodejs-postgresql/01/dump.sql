create database biblioteca;

create table autores (
	id serial primary key,
    nome text not null,
    idade int
);

create table livros (
	id serial primary key,
    autor_id int not null references autores(id),
    nome text not null,
    genero text,
    editora text,
    data_publicacao date
);