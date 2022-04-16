import { Observable, Subject } from "rxjs";

const sub = new Subject()

const observable = Observable.create(observer => {
  observer.next('DALE 1')
  observer.next('DALE 2')
  observer.next('DALE 3')
  observer.next('DALE 4')
  observer.complete()
})


const subscription2 = sub.subscribe({
  next: result => console.log('Obeservable 2',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

// Me inscrevo no observable passando o meu subject, pois eles possuem os mesmos métodos
const subscription1 = observable.subscribe(sub)

subscription1.add(subscription2)

setTimeout(() => subscription1.unsubscribe(), 3300);