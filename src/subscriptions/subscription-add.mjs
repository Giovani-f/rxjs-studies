import { Observable } from "rxjs";

const observer1 = Observable.create(observer => {
  console.log('Iniciando o Observable')
  const interval = setInterval(() =>  observer.next('DALE'), 1000)
  setTimeout(() =>  observer.complete(), 5000)

  // evitar memory leak
  return () => clearInterval(interval)
})

const observer2 = Observable.create(observer => {
  console.log('Iniciando o Observable 2')
  const interval = setInterval(() =>  observer.next('DALEZINHO'), 1300)
  setTimeout(() =>  observer.complete(), 5000)

  // evitar memory leak
  return () => clearInterval(interval)
})

const subscription1 = observer1.subscribe({
  next: result => console.log('Obeservable 1', result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

const subscription2 = observer2.subscribe({
  next: result => console.log('Obeservable 2',  result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

// unindo para encadear os unsubscribe
subscription1.add(subscription2)
// remove alguém do encadeamento
// subscription1.remove(subscription2)

setTimeout(() => subscription1.unsubscribe(), 3300);