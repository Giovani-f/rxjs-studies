import { Observable } from "rxjs";

const promise = new Promise(resolve => {
  resolve('DALE')
})

const observer = Observable.create(observer => {
  let i = 0
  const interval = setInterval(() => {
    console.log('aqui', i)
    observer.next(i++)
  }, 1000)

  // caso comentar o return continuará sendo executado, porém sem nenhum inscrito e isso irá gerar memory leak
  return () => clearInterval(interval)
})

promise.then(element => console.log('Promise', element))
const subscriber = observer.subscribe(element => console.log('Observable', element))

setTimeout(() => {
  subscriber.unsubscribe()
}, 5000);