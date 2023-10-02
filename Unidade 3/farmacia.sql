/*
Monte uma query que retorne a quantidade de produtos agrupados por categoria
e soma do estoque de todos os produtos de cada categoria
*/
SELECT categoria, COUNT(id) as "quantidadeProdutos", SUM(estoque) as "somaTotalDoEstoque" FROM farmacia GROUP BY categoria;
