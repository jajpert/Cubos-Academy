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