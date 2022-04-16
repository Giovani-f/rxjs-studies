# RxJS

## Introdução a programação reativa

Não podemos falar de RXJS, sem antes explicar um pouco sobre programação reativa. A programação reativa é um paradigma baseado em fluxo de dados assíncronos e na propagação de mudanças de fluxo.

Na programação reativa uma fonte de dados que pode ser finita ou não, é definida no seu código e depois ou imediatamente ela pode ser executada e seus resultados através de um fluxo de dados são notificados ao interessados.

### Princípios da programação reativa
- Elasticidade:

_Reage a demanda/carga: aplicações podem fazer uso de múltiplos nícleos e múltiplos servidores._

- Resiliente

_Reage às falhas: aplicações reagem e se recuperam de falhas de software, hardware e a conectividade._

- Message Driven

_Reage aos eventos (event driven): em vez de compor aplicações por múltiplas threads síncronas, sistemas são compostos de gerenciadores de eventos assíncronos e não bloqueantes._

- Responsividade

_Reage aos usuários: aplicações que oferecem interações ricas e em "tempo real" com usuários._

Esses princípios foram publicados em 2004 no manifesto reativo, que é um manifesto que dita o que é a programação reativa. Com isso surgiu a especificação do reactive strams e uma das suas principais implementações e mais populares é o ReactiveX

## ReactiveX

ReactiveX ou Reactive Extensions utiliza de 3 princípios bases
na sua criação, que são:

- Observer pattern

_O Observer é um padrão de projeto de software que define uma dependência um-para-muitos entre objetos de modo que quando um objeto muda o estado, todos seus dependentes são notificados e atualizados automaticamente._

- Iterator pattern

_O iterator é um padrão de projeto comportamental que permite a você percorrer elementos de uma coleção sem expor as representações dele (lista, pilha, árvore, etc.)._

- Programação funcional

_Programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis. Ela enfatiza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa._

O ReactiveX surgiu como um conceito e obteve implementações em diversas plataformas:

- Java: RxJava
- JavaScript: RxJS
- C#: Rx.NET
- C#(Unity): UniRx
- Scala: RxScala
- Clojure: RxClojure
- C++: RxCpp
- Lua: RxLua
- Ruby: Rx.rb
- Python: RxPY
- Go: RxGo
- Groovy: RxGroovy
- JRuby: RxJRuby
- Kotlin: RxKotlin
- Swift: RxSwift
- PHP: RxPHP
- Elixir: reaxive
- Dart: RxDart

## Observables

Observables são encapsuladores de dados assim como as promises, onde é possível encapsular um dado em obeservable para ser possível ter acesso os métodos que o rxjs disponibiliza, para manipular e recaber o dado novamente.

### Promises vs Observables

- Quais as diferenças?

<table>
<tr>
<th style="text-align:center">Promises</th>
<th style="text-align:center">Observables</th>
</tr>
<tr>
<td align="center">Único valor</td>
<td align="center">Múltiples valores</td>
</tr>
<tr>
<td align="center">Execussão imediata ( Eager )</td>
<td align="center">Execussão sob demanda ( Lazy )</td>
</tr>
<tr>
<td align="center">Compartilhada ( Multicast )</td>
<td align="center">Compartilhada ou não ( Multicast/Unicast )</td>
</tr>
<tr>
<td align="center">Assíncrona</td>
<td align="center">Síncrona e ou Assíncrona</td>
</tr>
</tr>
<tr>
<td align="center">Cancelável</td>
<td align="center">Não cancelável</td>
</tr>
</table>

- Valor Único vs Múltiplo

_As Promises emitem valores únicos enquantos os Observables emitem Múltiplos valores._

- Eager vs Lazy

_Na Promise o seu bloco de código é executado mesmo quando não temos ninguem para consumi-la, no caso o (.then), em outras palavras ela se resolve mesmo sem ter um then. Já em um Observable, o seu bloco de código só é executado quando há alguém o obeservando._

- Multicast vs Unicast/Multicast

_As promises diferentes dos Observables possuem um "estado" compartilhado, a partir do momento que declaramos um promise, o seu bloco de código é executado uma única vez e todos que obtiverem o (.then) dessa promise, receberão o valor emitido no bloco do código e o mesmo não será executado novamente._

_Já um Observable executará todo o bloco de código para cada subinscrição do mesmo, porém é possível obter um comportamento semelhante com o comportamento da Promise, aplicando o operador (share)._

- Async vs Async/Sync

_Em Promises todos os valores emitidos são Assícronos, já em Observables todos os valores que são emitidos imediatamente são Sícronos, porém os que virão a ser emitidos são Assíncronos._

- Não cancelável vs Cancelável

_As Promises (nativas) não são canceláveis, já os Observables podem ser cancelados._

## Subscriptions

Subscription é a forma que você possui de se increver em um Observable. O method subscribe possui 3 params (callbacks), sendo o primeiro callback o próprio valor emitido por um Observable, o segundo um callback de erro e o terceiro o complete, que indica que seu observable terminou.

## Subjects

São um tipo especial de Observable, enquanto os Observables são por padrão Unicast, mas podem vir a ser Multicast, os Subjects sempre serão Multicast. Além disso ao mesmo tempo que os Subjects são Observables, eles também são Observers. Outro ponto é que os Subjects emitem valores independente de quem está ouvindo, ou seja, existindo ou não um inscrito ele irá emitir o valor.

### BehaviorSubjects

Esse tipo de Subject se inicia com um valor e ele sempre mantém o último valor para ser emitido a qualquer novo inscrito.

### ReplaySubjects

Esse é um tipo de Subject que armazena uma quantidade definida de valores emitidos. Por curiosidade o BehaviorSubject é um ReplaySubject com o valor 1. Porém o Replay pode receber um segundo argumento que é um tempo em milisegundos em que ele vai armazenar essa informação.

_Esse tipo de subject é interessante para fazer cache._

### AsyncSubjects

Esse tipo de subject somente recebe a última emissão e somente se esse subject for completado.