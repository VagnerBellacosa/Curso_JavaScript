# Javascript

## Dicas para melhorar a performance e otimizar codigo

#1 – Avalie variáveis locais

(http://blogs.msdn.com/b/ie/archive/2006/08/28/728654.aspx)

Em princípio, específico para IE, porque variáveis locais na maioria das vezes são encontradas baseadas no escopo do mais específico para o menos específico, podendo passar por níveis múltiplos de escopo, e os look-ups podem resultar em queries genéricas. Na definição da função do escopo em uma variável local sem uma declaração var precedente, é importante que cada variável seja antecedida por var, de forma a definir o escopo corrente, para impedir o look-up e acelerar o código.

#2 – Crie códigos de atalho para acelerar a codificação

(http://www.spoonfeddesign.com/4-easy–tips–to–improve–javascript–efficiency)

Para códigos úteis de uso constante, a aceleração do processo de codificação pode ser obtida criando atalhos para códigos mais longos, por exemplo, document.getElementById. Criando atalhos, scripts mais longos não demorarão tanto para codificar, e economizarão tempo no processo como um todo.

#3 – Manipule fragmentos de elementos antes de incorporá-los ao DOM

(http://www.jquery4u.com/dom–modification/improve–javascript–performance)

Antes de colocar elementos no DOM, certifique-se de que todos os ajustes foram feitos para aumentar o desempenho do JavaScript. Isso eliminará a necessidade de deixar de lado as APIs Prepend ou Append jQuery APIs. 

#4 – Economize bytes usando Minification

(http://sixrevisions.com/web–development/10-ways–to–improve–your–web–page–performance)

Reduza o tamanho dos arquivos de seus documentos JavaScript removendo caracteres (abas, código-fonte, documentos, espaços etc) sem mudar a funcionalidade do arquivo. 

Há algumas ferramentas de Minification que podem ajudar nesse processo, com a possibilidade de reversão. Minification é o processo de remoção de todos os caracteres desnecessários do código-fonte, sem mudar sua funcionalidade. 

#5 – Não use loops aninhados se não forem necessários

(http://www.techstrut.com/2009/08/04/10-javascript–performance–tips)

Evite loops indesejáveis, tais como for/while, de forma a manter a linearidade do JavaScript e impedir que se tenha que passar por milhares de objetos. Loopsindesejados podem fazer o browser trabalhar mais arduamente para processar os códigos e podem retardar o processo. 

#6 – Faça cache de objectos para aumentar o desempenho

 (http://www.techstrut.com/2009/08/04/10-javascript–performance–tips)

Muitas vezes scripts são repetidamente usados para acessar certo objeto. Armazenando um objeto muito acessado em uma variável, e usando uma variável em referências subsequentes a esse objeto, um aumento do desempenho pode ser obtido imediatamente. 

#7 – Use um arquivo .js para cache de scripts

(http://www.javascriptkit.com/javatutors/efficientjs.shtml)

O uso desta técnica permite um melhor desempenho, por permitir ao browser carregar o script  uma vez, e somente voltar a chamá-lo do cache caso a página seja recarregada ou revisitada. 

#8 – Coloque o JavaScript no final da página

(http://developer.yahoo.com/blogs/ydn/posts/2007/07/high_performanc_5)

Incluir os scripts o mais próximo possível do final da página irá aumentar a velocidade de renderização e melhorar o paralelismo de download. O resultado é que a página parecerá carregar mais rápido, e em alguns casos pode economizar no total de código necessário.

#9 – Use o jQuery como framework

(http://www.techstrut.com/2009/08/04/10-javascript–performance–tips)

Usado no scripting do HTML, o jQuery é uma facilidade na utilização da biblioteca JavaScript que pode ajudar a aumentar a velocidade de qualquer website. O jQuery  fornece um grande número de plug-ins que podem ser usados rapidamente, mesmo por programadores iniciantes.

#10 – Comprima seus arquivos com GZip

(http://devmoose.com/coding/10-ways–to–instantly–speed–up–your–website)

O GZip pode reduzir o arquivo JavaScript consideravelmente, economizando largura de banda e acelerando o tempo de resposta. Os arquivos JavaScript podem ser muito grandes e, sem compressão, podem derrubar qualquer website. Arquivos menores proporcionam uma experiência na web mais rápida e mais satisfatória.

#11 – Não use a palavra-chave “With”

(http://blogs.msdn.com/b/ie/archive/2006/08/28/728654.aspx)

A palavra-chave “With” é considerada uma ovelha negra por ter diversas falhas que podem ser bem frustrantes. Embora simplifique o trabalho com propriedades locais  mais simples, a “With” pode fazer a procura por variáveis em outros escopos mais custosas.

#12 – Minimize solicitações ao HTTP

(http://www.websiteoptimization.com/speed/tweak/http)

Minimize solicitações HTTP para processar páginas, combinando arquivos externos e incluindo o JavaScript diretamente nas páginas XHTML. Cada vez que um único HTTP acessa o servidor, o resultado é um grande número de atrasos. 

#13 – Implemente disparo de eventos

(http://www.djavaweb.com/blog/75-speed–up–your–web–develop–smart–event–handlers.html)

Com disparo de eventos, fica mais fácil usar um único handler de eventos para gerenciar um tipo de evento para toda a página. Sem o uso do disparo de eventos, grandes aplicativos da web podem travar por causa de muitos handlers de eventos. Os benefícios do disparo de eventos incluem: menos funcionalidades para gerenciar, menores ligações entre código e DOM e menos memória necessária ao processamento.

#14 – Não use o mesmo script duas vezes

(http://www.abhishekbharadwaj.com/2010/12/speed–up–your–website–avoid–duplicate–scripts)

A duplicação de scripts terá um impacto significativo no desempenho. Criará solicitações desnecessárias ao HTTP, especialmente no browser IE. O uso de uma tag SCRIPT em uma página HTML ajudará a evitar a duplicação acidental de scripts.

#15 – Remova Double Dollar $

(http://www.mellowmorning.com/2008/05/18/javascript–optimization–high–performance–js–apps)

O uso da função “double dollar $” não é necessariamente útil no aumento da velocidade de um website.

#16 – Criando referências variáveis

(http://mondaybynoon.com/2009/04/27/a–couple–of–quick–tips–for–javascript–optimization)

Ao trabalhar com um nó específico repetidamente, o melhor é definir a variável com esse nó em particular, em vez de ficar voltando a ele frequentemente. Essa não é uma melhoria significativa, mas pode vir a ser, quando em grande escala.

#17 – Aumente a velocidade da identificação de objetos

(http://dean.edwards.name/weblog/2005/12/js–tip1)

Um método mais eficiente de usar identificação de objetos é usar um código criado dinamicamente baseado fora da identificação de objetos, em vez de executar a identificação de objetos dentro de uma função. 

#18 –Escreva Loops eficazes

(http://robertnyman.com/2008/04/11/javascript–loop–performance)

Dependendo do browser, o método usado para escrever Loops pode ter grande impacto no desempenho de um site. A escrita imprópria de loops pode fazer com que páginas fiquem lentas, com muitas queries e execução de loops em paralelo.

#19 – Diminua cadeias de escopo

(http://homepage.mac.com/rue/JS_Optimization_Techniques)

Escopos globais podem ser lentos, porque sempre que uma função é executada, um escopo de invocação temporário é criado. O JavaScript pesquisa o primeiro item na cadeia de escopo e, se não encontrar a variável, percorre toda a cadeia até encontrar o global object.      

#20 – Acesse índices em NodeLists

(http://homepage.mac.com/rue/JS_Optimization_Techniques)

NodeLists são vivas e podem ocupar um monte de memória, já que são atualizados quando um documento subjacente muda. É mais rápido indexar diretamente em uma lista, se o browser não precisar criar um objeto node list.

#21 – Não use ‘eval’

(http://www.javascripttoolbox.com/bestpractices/#eval)

Embora a função “eval” seja um bom método para executar um código arbitrário, cada string que tenha passado pela função eval tem que ser analisada e executada na hora. Esse encargo tem que ser pago toda vez que a execução chega a um eval evocado.

#22 – Utilize funções inline

(http://portal.acm.org/citation.cfm?id=844097)

A Function Inlining ajuda na eliminação dos custos de uma call, e substitui  uma função call pelo corpo da função chamada. Em JavaScript, a execução de uma function call é uma operação de alto custo por necessitar de diversos passos preparatórios para ser executada: alocar espaço para parâmetros, copiar os parâmetros, e decidir o nome da função. 

#23 – Implemente Common Sub-expression Elimination (CSE)

(http://sunilkumarn.wordpress.com/2010/10/19/common–subexpression–elimination–cse)

A CSE (Common sub-expression elimination) é uma técnica de otimização do compilador voltada para o desempenho,  que pesquisa expressões idênticas, substituindo-as por uma única variável que retém o valor computado. Você pode esperar que o uso de uma única variável local para uma common sub-expression será sempre mais rápido do que não mudar o código. 

#24 – Construa o nó DOM e todos seus sub-nós offline

(http://archive.devwebpro.com/devwebpro-39-0030514OptimizingJavaScriptforExecutionSpeed.html)

Na adição de conteúdo complexo a um site, como tabelas, o desempenho é melhorado adicionando sub-árvores complexas offline.

#25 – Tente não usar variáveis globais

(http://wiki.forum.nokia.com/index.php/JavaScript_Performance_Best_Practices#JavaScript_Performace_Best_Practices)

Uma vez que o mecanismo de script pesquisar o escopo ao referenciar as variáveis globais de dentro de uma função ou de outro escopo, a variável será destruída quando o escopo local for perdido. Se as variáveis no escopo global não puderem persistir enquanto durar o script, o desempenho será melhorado. 

#26 – Use operações primitivas em vez de invocar funções

(http://wiki.forum.nokia.com/index.php/JavaScript_Performance_Best_Practices#JavaScript_Performace_Best_Practices)

Maior rapidez pode ser obtida na performance de oops e funções críticas usando primitive functions equivalentes ao invés de function calls.

#27 – Não mantenha referências a outros documentos

(http://dev.opera.com/articles/view/efficient–javascript/?page=4#docreferences)

Não reter referências a outros documentos depois que o script as processou aumenta o desempenho. Isso porque quaisquer referências a objetos desses documentos não devem ser mantidas em suas árvores DOM, e o ambiente do script não será mantido na memória. Dessa forma, o próprio documento não é mais carregado. 

#28 – Use XMLHttpRequest

(http://dev.opera.com/articles/view/efficient–javascript/?page=4#docreferences)

O XMLHttpRequest ajuda na redução de conteúdo proveniente do servidor, e evita o impacto no desempenho devido à destruição e à recriação do ambiente do script entre o carregamento de páginas. É importante assegurar-se de que o  XMLHttpRequest é suportado, pois, caso contrário, problemas e confusões podem ocorrer.

#29 – Evite o uso de try-catch-finally

(http://dev.opera.com/articles/view/efficient–javascript/?page=2)

Sempre que o catch é executado e a excessão capturada é atribuida a uma variável, essa variável é adicionada ao escopo atual em tempo de execução. Alguns browsers não lidam eficientemente com esse processo, porque a variável é criada e destruída durante a execução. Evite! 

#30 – Não use o for-in indevidamente

(http://dev.opera.com/articles/view/efficient–javascript/?page=2)

Como o loop “for-in” requer que o mecanismo de script construa uma lista de todas as propriedades enumeráveis, codificar dentro do for loop não modifica o array. As iterações calculam o comprimento do array e salvam em uma variável len no escopo do loop.