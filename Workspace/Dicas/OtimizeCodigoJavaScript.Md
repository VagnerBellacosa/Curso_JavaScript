# JavaScript

## Dicas para otimizar seu codigo

### Remover Código não utilizado

Bom como todos sabemos quanto mais código (mais bugs) mais dados precisam ser transmitidos para o cliente.

Mais código também requer mais tempo para carregar o código.

O navegador leva mais tempo para analisar e processar o código.

Além disso remover o código não utilizado facilita muito na hora de ler e dar manutenção no código.

Existem ferramentas para ajudar a remover o código não usado.

Como por exemplo o **Uglify** e o **Closure Compiler**.

### Feche loops o mais rápido possível

Sempre encerre os seus loops o mais rápido possível.

Use os comandos break e continue para isso.

Além disso lembre de usar as funções de alto nível para arrays já que elas foram feitas pensando no melhor desempenho.

###  Use código assíncrono

O JavaScript é síncrono por padrão e também é single-thread.

Mas podem ter tarefas que levam muito tempo para serem feitas.

Síncrono o código vai bloquear outros códigos até que ele finalize por completo, já que ele é estruturado.

Isso reduz a performance do código em geral.

Mas para resolver isso é só implementar esse código de maneira assíncrona.

A tempos atrás o código assíncrono era feito usando callbacks.

Mas com as novas especificações do ECMAScript temos formas mais elegantes como as promises e Async/Await.

###  Use Web Workers

Web Workers fazem tarefas pesadas em segundo plano no navegador.

Eles ajudam muito em tarefas muito pesadas, ou muito demoradas.

Os workers não interferem na experiência do usuário em geral pois são executados em segundo plano.

Eles comunicam com o resto do código por meio de mensagens.

Para saber mais sobre Web Workers confira a documentação da MSDN.

###  Minifique o código para produção

Use ferramentas para minificar o seu código.

Isso pode diminuir até 60% dos dados que seriam enviados para o cliente.

Assim o tempo de carregamento de páginas diminui, assim como o uso de dados.

É bom também usar ferramentas de compressão, mas nesse caso pode ter o efeito colateral de lentidão caso o hardware do cliente seja fraco.

###  Minimize o acesso ao DOM

Acessar o DOM por si só já é lento.

Porém existem formas para reduzir o acesso ao DOM.

Para isso acesse o elemento uma vez e o armazene em uma variável local.

Após usar o elemento sete o valor da variável para null, a fim de evitar vazamentos de memória.

###  Evite vazamentos de memória (Memory Leaks)

A limpeza da memória da aplicação é feita pelo Garbage Collector.

Mas mesmo com o Garbage Collector sua aplicação pode ter vazamentos de memória.

Isso pode ocorrer por conta da falta de referência em alguns métodos, como Map e Set.

Análise sempre vazamentos de memórias na sua aplicação, já que eles podem gerar muitos problemas.

### Use Cache o máximo possível

Usar cache na aplicação diminui a latência e o volume de dados, ficando assim mais veloz.
