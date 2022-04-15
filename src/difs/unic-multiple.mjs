import { Observable } from "rxjs";

new Promise(resolve => {
  resolve(1)
  // não aconteceria nada, pois a partir do momento que a promise é resolvida, ela não emite mais nenhum valor
  resolve(2)
}).then(element => console.log('Promise', element))

Observable.create(observer => {
  observer.next(1)
  observer.next(2)
}).subscribe(element => console.log('Observable', element))