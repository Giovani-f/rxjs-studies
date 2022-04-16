import { Observable } from "rxjs";

const observer = Observable.create(observer => {
  console.log('Iniciando o Observable')
  const interval = setInterval(() =>  observer.next('DALE'), 1000)
  setTimeout(() =>  observer.complete(), 5000)

  // evitar memory leak
  return () => clearInterval(interval)
})

const subscription = observer.subscribe({
  next: result => console.log(result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})

setTimeout(() => subscription.unsubscribe(), 3000);