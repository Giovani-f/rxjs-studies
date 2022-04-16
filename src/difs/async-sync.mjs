import { Observable } from "rxjs";

const promise = new Promise(resolve => {
  resolve('DALE')
})

const observer = Observable.create(observer => {
  observer.next('DALE')

  setTimeout(() => {
    observer.next('DALE 2')
  }, 1000)
})

promise.then(element => console.log('Promise', element))
observer.subscribe(element => console.log('Observable', element))