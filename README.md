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

Observables são encapsuladores de dados assim como as promises são, onde é possível encapsular um dado em obeservable para ser possível ter acesso os métodos que o rxjs disponibiliza, para manipular e recaber o dado novamente.

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
</table>
