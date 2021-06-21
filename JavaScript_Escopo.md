# JavaScript Tutorial

## Escopo

### *O que é escopo?*

A grande maioria das linguagens possui o conceito de escopos, e JavaScript não é diferente. Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.

Imagine que escopo é uma caixa e tudo que for criado nessa caixa pode ser acessado por qualquer objeto dentro da mesma. Um escopo é criado sempre que definimos uma função:

...
function hello (name) {
  // Isto aqui é um escopo
}
...

Sempre que iniciamos nosso código, o JavaScript cria um escopo global, uma caixa maior para que possamos colocar todas as demais caixas dentro, e quando criamos nossa função hello estamos colocando uma caixa menor dentro do escopo global na qual estamos trabalhando. Agora vamos a este exemplo:

...
function foo () {
  // Escopo de foo
  function bar () {
    // Escopo de bar
  }
}
...

Quando criamos outra função dentro da função foo, estamos colocando outra caixa dentro do escopo da função, criando o que é chamado de **“nested scopes”**, ou escopos aninhados.

Todo o escopo é fechado para acessos externos, de forma que escopos superiores não conseguem acessar escopos internos, mas o contrário é permitido.

### *Para quê serve o escopo?*

O escopo é extremamente importante em JavaScript porque ele pode ser interpretado de diversas formas. Um exemplo de como essas interpretações mudam foi a inclusão dos identificadores let e const, além do var.

Antes do ES2015, a única forma de declararmos uma variável em JS seria através da keyword var. O problema disso é que var age sobre o escopo da função:

...
function foo (a) {
  var name = 'Lucas'
  
  function bar () {
    var age = 23
    console.log(name) // Lucas
    console.log(age) // 23
  }
  
  bar() // Lucas - 23
  console.log(name) // Lucas
  console.log(age) // age is not defined
}
...

Veja que conseguimos acessar name de dentro de bar, mas não conseguimos acessar age de dentro de foo. Isso acontece porque, quando criamos uma variável usando var, ela só fica disponível dentro do escopo de função, quando criamos a função foo, criamos um escopo, então criamos a variável name dentro de foo.

Essa variável foi colocada dentro da caixa de foo (nosso escopo. Quando criamos bar, criamos uma nova caixa dentro de foo e dentro dela colocamos age.

A função bar pode acessar a variável name porque ela pertence ao seu escopo pai, então isso é permitido. Porém, foo não consegue acessar age porque, como dissemos antes, o escopo de bar é interno a foo. Dessa forma, sua “caixa” está selada para foo.

Isso permite a implementação de diversos patterns em JavaScript, mas também permite que criemos algo que, por padrão, não existe na linguagem: modificadores de acesso. Fazendo essa manipulação de escopo, podemos criar variáveis que são privadas ou públicas.

### Block Scope ###

Anteriormente falamos do escopo criado por funções, mas esta não é a única forma de criarmos um escopo no JS. Todo o tipo de bloco cria um novo escopo, e por bloco queremos dizer qualquer estrutura que utilize chaves, como if, for, while e outras, por exemplo:

...
function foo () {
  var name = 'Lucas'
  
  if (name) {
    // Aqui temos outro escopo
    var age = 23
  }
  
  console.log(name) // Lucas
  console.log(age) // 23
}
...

Quando utilizamos o if estamos criando outro escopo, mas veja que age está acessível agora a partir de qualquer parte, por que quando criamos um escopo usando if não estamos sujeitos ao escopo da função superior?

Escopos criados por funções são chamados de function scopes, enquanto escopos criados por estruturas de controle são chamados de block scopes.

### Const e Let ###

A grande mudança trazida pelo ES2015 foram a introdução de let e const como maneiras de definirmos variáveis. Essas keywords permitem que trabalhemos não só com o escopo de funções, mas também com o escopo dos blocos, por exemplo, se utilizarmos apenas var:

...
var name = 'Lucas'

const func = () => {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

func()

console.log(name) // 'Lucas'  
...

Veja que temos duas variáveis com o mesmo nome. Uma delas está no escopo global, ou seja, acessível à todas as funções e objetos, e outra está dentro de um escopo de função.

Até ai seguimos o mesmo modelo de antes, porém, as coisas começam a ficar complexas quando removemos a função da jogada:

...
var name = 'Lucas'

if (true) {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Amanda'  
...

Veja que agora alteramos a variável name, mesmo estando fora de seu escopo. Isso porque o escopo da função só cobre funções, e não outros tipos de blocos, e isso essencialmente nos diz que ambas declarações de name estão no escopo global.

Isso pode causar uma série de problemas, pois em um código mais complexo, podemos ter trocas de variáveis indesejadas ou então vazamentos de memória.

É ai que let e const salvarão nossas vidas.

Ambos let e const possuem escopo de bloco, diferente do escopo de função do var. Isto significa que, se reescrevermos nosso trecho anterior removendo todos os var, teremos um código muito mais consistente:

...
let name = 'Lucas'

if (true) {  
  let name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Lucas'  
...

Parece bobo, mas vamos ver um exemplo onde esse problema pode se tornar bastante sério, um loop:

...
var prints = []

for (var i = 0; i < 3; i++) {  
  prints.push(() => console.log(i))
}

prints.forEach(f => f())
// saída: 3, 3, 3
...

Veja que a cada iteração do loop nós incrementamos o contador i, então quando executamos a função final, o log buscou o último valor dessa variável.

Isso pode se tornar um grande problema quando fazemos determinadas ações em escala. Quando reescrevemos nosso loop de forma consistente, temos:

...
const prints = []

for (let i = 0; i < 3; i++) {  
  prints.push(() => console.log(i))
}

prints.forEach(f => f())
// saída: 0, 1, 2
...

Isso acontece porque, a cada execução do loop, um novo escopo é criado com o valor atual da variável.

### Scope Chain ###

Um outro conceito importante quando falamos de escopos é o que é chamado de cadeia de escopos. Isso está diretamente ligado a como o JS vai encontrar as definições de nossos objetos dentro do nosso código.

Essa cadeia funciona mais ou menos como uma bolha – começamos sempre do menor escopo criado e vamos subindo para os maiores escopos até chegar no escopo global. Isso também define uma ordem de precedência sobre qualquer objeto que estamos buscando:

...
function foo () {
  console.log('escopo global')
}

function bar () {
  function foo () {
    console.log('escopo local')
  }
  foo()
}

function baz () {
  foo()
}

foo() // Escopo Global
bar() // Escopo Local
baz() // Escopo Global
...

O que acontece é que, quando executamos uma função, o JS vai buscar o escopo mais próximo, onde essa função possa ser encontrada, partindo do seu escopo atual e indo até o escopo global – do menor para o maior.

Quando estamos executando foo no escopo global, o interpretador buscará uma função chamada foo no seu escopo atual e encontrará a primeira função que definimos.

Quando executamos bar, o interpretador vai procurar uma função foo no escopo local, encontrando a definida dentro da mesma.

Por fim, quando executamos baz, vamos ter um bubble out. O interpretador buscará uma função foo dentro do escopo de baz, mas não encontrará, então passará para o escopo de cima, que é o global, encontrando a primeira função que definimos.

Dito isso, podemos unir o nosso conceito de permissões de acesso dos parágrafos anteriores com o conceito de busca para termos uma cadeia de execução bastante complexa:

...
let name = 'Paulo'

function primeiro () {
  console.log(`1º diz: ${name}`) // 1º diz: Paulo
  segundo()
  function segundo () {
    let name = 'Amanda'
    console.log(`2º diz: ${name}`) // 2º diz: Amanda
    terceiro()
    function terceiro() {
      console.log(`3º diz: ${name}`) // 3º diz: Amanda
    }
  }
}

primeiro()
...

Veja que, quanto mais baixo estamos no nível da cadeia, mais acesso temos, pois o interpretador vai buscar os dados dos objetos nos escopos superiores, da mesma forma, quanto mais perto do escopo global, menos “níveis” temos para chegar ao fim da cadeia.

### Conclusão ###

A ideia de escopos é super importante para qualquer desenvolvedor JavaScript porque permite que façamos modificações de acesso que podem permitir que controlemos melhor o fluxo do nosso código, bem como os níveis de acesso de nossos objetos. Dessa forma, controlando melhor nosso fluxo de dados.
