import { BehaviorSubject } from "rxjs";

const sub = new BehaviorSubject(0)

// irá receber o valor inicial ou seja 0

sub.next('DALE 1')
sub.next('DALE 2')
sub.next('DALE 3')
sub.next('DALE 4')

// caso emita novos valores, o inscrito receberá o último valor

sub.subscribe({
  next: result => console.log('Obeservable 1',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

sub.next('DALE 5')
sub.next('DALE 6')

// Obs 1 receberá esses valores e o Obs 2 receberá somente o último valor emitido

sub.subscribe({
  next: result => console.log('Obeservable 2',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})
