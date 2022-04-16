import { AsyncSubject } from "rxjs";

const sub = new AsyncSubject()

// irá receber o valor inicial ou seja 0

sub.next('DALE 1')
sub.next('DALE 2')
sub.next('DALE 3')
sub.next('DALE 4')

sub.subscribe({
  next: result => console.log('Obeservable 1',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

sub.next('DALE 5')
sub.next('DALE 6')

setTimeout(() => {
  sub.subscribe({
    next: result => console.log('Obeservable 2',  result),
    error: err => console.log(err),
    complete: () => console.log("completed")
  })
}, 500)

// somente receberá algo quando for completado, sendo sempre a última emissão
sub.complete()
