-- 1
SELECT COUNT(*) FROM farmacia;

-- 2
SELECT MIN(idade) FROM usuarios;
SELECT idade FROM usuarios ORDER BY idade ASC LIMIT 1;

-- 3
SELECT MAX(idade) FROM usuarios;
SELECT idade FROM usuarios ORDER BY idade DESC LIMIT 1;

-- 4
SELECT ROUND(AVG(idade)) FROM usuarios WHERE idade >= 18;

-- 5
SELECT categoria, SUM(estoque) as "estoqueTotal" FROM farmacia WHERE categoria = 'blue' OR categoria = 'black' GROUP BY categoria;

-- 6
SELECT categoria, SUM(estoque) as "estoqueTotal" FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 7
SELECT categoria, SUM(estoque) as "estoqueTotal" FROM farmacia WHERE categoria IS NULL GROUP BY categoria;

-- 8
SELECT COUNT(*) FROM farmacia WHERE categoria IS NULL;

-- 9
SELECT CONCAT(medicamento, ' (', COALESCE(categoria), ') ') FROM farmacia WHERE categoria IS NOT NULL;


-- 10
SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ') ') FROM farmacia WHERE categoria IS NOT NULL;

-- 11
SELECT nome, idade, CAST(cadastro AS DATE) FROM usuarios WHERE cadastro::DATE < '2021-01-01'	AND cadastro::DATE > '2019-12-31';

-- 12
SELECT nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) AS tempo FROM usuarios;

-- 13
SELECT nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) AS tempo FROM usuarios WHERE idade >= 60;

-- 14
SELECT categoria, COUNT(id) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

-- 15
SELECT idade, COUNT(*) FROM usuarios WHERE idade >= 18 GROUP BY idade;

-- 16
SELECT categoria, SUM(estoque) FROM farmacia GROUP BY categoria LIMIT 3;