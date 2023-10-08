SELECT * FROM musicas;

SELECT id, ritmo, compositor FROM musicas;

SELECT DISTINCT compositor, composicao FROM musicas;

SELECT * FROM musicas WHERE tempo > 200;

SELECT * FROM musicas WHERE tempo > 200 AND tempo < 400;

SELECT * FROM musicas WHERE tempo BETWEEN 200 AND 400;

SELECT * FROM musicas WHERE compositor = 'Schubert' OR compositor = 'Bach';

SELECT * FROM musicas WHERE compositor IS NULL;

SELECT * FROM musicas WHERE compositor IS NOT NULL;

SELECT * FROM musicas OFFSET 3;

SELECT * FROM musicas LIMIT 3;

SELECT * FROM musicas LIMIT 10 OFFSET 3;

SELECT * FROM musicas ORDER BY id ASC;

SELECT * FROM musicas ORDER BY id DESC;

SELECT * FROM musicas WHERE compositor = 'Schubert' OR compositor = 'Bach' ORDER BY id DESC;

SELECT * FROM musicas WHERE compositor = 'Bach' ORDER BY id DESC LIMIT 5 OFFSET 5;

SELECT * FROM musicas ORDER BY ritmo DESC;

SELECT * FROM musicas ORDER BY compositor ASC, composicao DESC;

SELECT * FROM musicas WHERE composicao LIKE '%in A minor';

SELECT * FROM musicas WHERE composicao LIKE 'Piano Sonata No 10%';

SELECT * FROM musicas WHERE composicao LIKE '%Sonata%';

SELECT * FROM musicas WHERE composicao LIKE '_iano Sonata in A major';

SELECT * FROM musicas WHERE composicao LIKE '_iano Sonata in A maj__';

SELECT * FROM musicas WHERE composicao LIKE '_iano Sonata%';

SELECT * FROM musicas WHERE composicao ILIKE 'piano sonata%';  -- nao é case sensitive

SELECT COUNT(*) as quantidadeUsuarios FROM usuarios WHERE idade >= 18; -- quantidadeUsuario é um alias

SELECT nome AS "Nome Completo" FROM usuarios;

SELECT nome || ' - ' || email as nomeEmail FROM usuarios; -- o pipe concatena 

SELECT concat(nome, ' - ', email, ' - ', idade) as nomeEmailIdade from usuarios;

SELECT AVG(idade) FROM usuarios;

SELECT ROUND(AVG(idade), 2) FROM usuarios;

SELECT MIN(nome) FROM usuarios;

SELECT MAX(idade) FROM usuarios;

SELECT MAX(cadastro) FROM usuarios;

SELECT SUM(idade) FROM usuarios;

SELECT idade::text FROM usuarios;

SELECT '123'::integer;

SELECT '123'::integer + '4';

SELECT CAST(idade AS text) FROM usuarios;

SELECT * FROM agendamentos;

SELECT NOW();

SELECT * FROM agendamentos WHERE CAST(agendamento AS date) > NOW();

SELECT * FROM agendamentos WHERE CAST(agendamento AS timestamp) > NOW();

SELECT CAST(agendamentos AS date) FROM agendamento;

SELECT CAST(agendamentos AS time) FROM agendamento;

SELECT CAST(agendamentos AS timestamp) FROM agendamento;

SELECT AGE('2022-03-16 12:00:00', '2021-03-14 12:00:00');

SELECT AGE(CAST('2004-06-25 08:00:00' AS TIMESTAMP));

SELECT *, AGE(CAST(agendamento AS TIMESTAMP)) FROM agendamentos WHERE CAST(agendamento AS TIMESTAMP) > NOW();

SELECT COALESCE(NULL, NULL, 'cenoura');

SELECT CONCAT(nome, ' - ', COALESCE(telefone, email, 'não possui telefone')) FROM usuarios;

SELECT idade, COUNT(id) FROM usuarios GROUP BY idade ORDER BY idade;

create table editora (
    id serial primary key,
    nome text not null,
    cnpj text unique,
    data_cadastro timestamp default now()
);

insert into editoras (nome, cnpj) values ('Cubos Academy', '00011222333')

create table livros (
  isbn integer primary key,
  editora_id integer references editoras(id),
  titulo text not null,
  data_publicacao date not null
);

create table livros (
  isbn integer primary key,
  editora_id integer,
  foreign key editora_id references editoras(id)
);

insert into livros (isbn, editora_id, titulo, data_publicacao) values (12345, 1, 'Backend com Node.js', '2023-10-05');

create table enderecos (
  id serial primary key,
  editora_id integer references editoras(id),
  cep text not null,
  rua text,
  bairro text,
  cidade text, 
  estado char(2),
  pais text
);

insert into enderecos (editora_id, cep, rua, bairro, cidade, estado) values (1, '79080740', 'anhanguera', 'vila ipiranga', 'campo grande', 'MS');

create table categorias (
  id serial primary key,
  nome text not null
);

create table livro_categoria (
  livro_isbn integer references livros(isbn),
  categoria_id integer references categorias(id)
);

insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Node.js');

insert into livro_categoria (livro_isbn, categoria_id) values (12345, 1), (12345, 3), (12346, 2);

create table comentarios (
  id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios(id),
  livro_id integer references livros(isbn)
);

insert into comentarios (livro_id, descricao) values (12345, 'muito bom');
insert into comentarios (comentario_id, descricao) values (1, 'tambem achei');

alter table categorias add column descricao text default 'sem descrição';
alter table categorias drop column descricao;

alter table comentarios alter column descricao type varchar(100)

create table telefones (
  id serial primary key,
  editora_id integer,
  telefone text
);

alter table telefones add constraint fk_telefones_editoras foreign key (editora_id) references editoras(id);
