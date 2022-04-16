import { Observable } from "rxjs";
import { share } from "rxjs/operators";

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
}).pipe(
  share()
)

promise.then(element => console.log('Promise', element))
observer.subscribe(element => console.log('Observable', element))

setTimeout(() => {
  promise.then(element => console.log('Promise 2', element))
  observer.subscribe(element => console.log('Observable 2', element))
}, 2000)