import { ReplaySubject } from "rxjs";

const sub = new ReplaySubject(4, 500)

// irá receber o valor inicial ou seja 0

sub.next('DALE 1')
sub.next('DALE 2')
sub.next('DALE 3')
sub.next('DALE 4')

// caso emita novos valores, o inscrito receberá a quantidade de valores que lhe foi passado

sub.subscribe({
  next: result => console.log('Obeservable 1',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

sub.next('DALE 5')
sub.next('DALE 6')

// O obs2 não receberá nenhum valor

setTimeout(() => {
  sub.subscribe({
    next: result => console.log('Obeservable 2',  result),
    error: err => console.log(err),
    complete: () => console.log("completed")
  })
}, 500)
