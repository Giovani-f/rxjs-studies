import { Observable } from "rxjs";

const promise = new Promise(resolve => {
  console.log('Iniciando a Promise')
  setTimeout(() => {
    resolve('DALE')
  }, 3000);
})

const observer = Observable.create(observer => {
  console.log('Iniciando o Observable')
  setTimeout(() => {
    observer.next('DALE')
  }, 3000);
})

// O log de iniciando promise não aparecerá novamente
promise.then(element => console.log('Promise', element))
// Já o log de Iniciando Observable irá aparcer novamente
observer.subscribe(element => console.log('Observable', element))

setTimeout(() => {
  promise.then(element => console.log('Promise 2', element))
  observer.subscribe(element => console.log('Observable 2', element))
}, 2000)