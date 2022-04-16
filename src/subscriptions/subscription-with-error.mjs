import { Observable } from "rxjs";

const observer = Observable.create(observer => {
  console.log('Iniciando o Observable')
  const interval = setInterval(() =>  observer.next('DALE'), 1000)
  // setTimeout(() =>  observer.complete(), 5000)
  setTimeout(() =>  observer.error(new Error('Error Dale')), 3000)

  // evitar memory leak
  return () => clearInterval(interval)
})

observer.subscribe({
  next: result => console.log(result),
  error: err => console.log(err),
  complete: () => console.log("completed")
})
