-- 1
insert into categorias (nome) values ('frutas'), ('verduras'), ('massas'), ('bebidas'), ('utilidades');

-- 2
insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id) values 
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.', 90, 34, 2),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 2),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 176, 1);

-- 3
insert into clientes (cpf, nome) values ('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

-- 4
insert into vendedores (cpf, nome) values ('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

-- 5
insert into pedidos (valor, cliente_cpf, vendedor_cpf) values 
( 9650, '80371350042', '28007155023'),
( 6460, '63193310034', '23262546003'),
( 4120, '75670505018', '23262546003'),
( 9370, '75670505018', '82539841031'),
( 2400, '67642869061', '82539841031');

insert into itens_do_pedido (produto_id, quantidade, pedido_id) values 
(1, 1, 1),
(10, 1, 1),
(11, 6, 1),
(15, 1, 1),
(2, 5, 1);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 10;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 11;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 15;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 2;

insert into itens_do_pedido (produto_id, quantidade, pedido_id) values 
(17, 10, 2),
(18, 3, 2),
(1, 5, 2),
(5, 10, 2),
(6, 2, 2);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 6;

insert into itens_do_pedido (produto_id, quantidade, pedido_id) values 
(13, 1, 3),
(12, 6, 3),
(17, 5, 3);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 13;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 12;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where id = 17;

insert into itens_do_pedido (produto_id, quantidade, pedido_id) values 
(16, 1, 4),
(18, 6, 4),
(7, 1, 4),
(1, 3, 4),
(5, 20, 4),
(6, 2, 4);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 16;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 7;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 20 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 6;


insert into itens_do_pedido (produto_id, quantidade, pedido_id) values 
(18, 8, 5),
(8, 1, 5),
(17, 3, 5),
(8, 8, 5),
(2, 2, 5);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where id = 8;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where id = 8;
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where id = 2;
