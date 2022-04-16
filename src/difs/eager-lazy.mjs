import { Observable } from "rxjs";

new Promise(resolve => {
  console.log('Iniciando a Promise')
  resolve('DALE')
  // não aconteceria nada, pois a partir do momento que a promise é resolvida, ela não emite mais nenhum valor
  resolve('DALE 2')
})// .then(element => console.log('Promise', element))

const observer = Observable.create(observer => {
  console.log('Iniciando o Observable')
  observer.next('DALE')
  observer.next('DALE 2')
})// .subscribe(element => console.log('Observable', element))

setTimeout(() => {
  observer.subscribe(element => console.log('Observable', element))
}, 3000)