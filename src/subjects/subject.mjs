import { Subject } from "rxjs";

const sub = new Subject()

const subscription1 = sub.subscribe({
  next: result => console.log('Obeservable 1', result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

const subscription2 = sub.subscribe({
  next: result => console.log('Obeservable 2',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

// podemos emitir dados do lado de fora e cada uma das emissões será transmitidas para os 2 inscritos
sub.next('DALE 1')
sub.next('DALE 2')
sub.next('DALE 3')
sub.next('DALE 4')
sub.complete()

subscription1.add(subscription2)

setTimeout(() => subscription1.unsubscribe(), 3300);