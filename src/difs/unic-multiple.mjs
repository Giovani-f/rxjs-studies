import { Observable } from "rxjs";

new Promise(resolve => {
  resolve('DALE')
  // não aconteceria nada, pois a partir do momento que a promise é resolvida, ela não emite mais nenhum valor
  resolve('DALE 2')
}).then(element => console.log('Promise', element))

Observable.create(observer => {
  observer.next('DALE')
  observer.next('DALE 2')
}).subscribe(element => console.log('Observable', element))