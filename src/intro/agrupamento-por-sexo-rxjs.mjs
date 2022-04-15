import { from } from 'rxjs'
import { filter, reduce } from 'rxjs/operators'

const groupByGenderAndAge = () => source$ =>
  source$.pipe(
    filter(element => element.age >= 18),
    reduce(
      (a, b) => ({
        ...a,
        [b.sex]: [...(a[b.sex] || []), b]
      }),
      {}
    )
  )

const people = [
  { name: 'Giovani', age: 21, sex: 'M' },
  { name: 'Giovanna', age: 20, sex: 'F' },
  { name: 'João', age: 21, sex: 'M' },
  { name: 'Maria', age: 21, sex: 'F' }
]

from(people)
  .pipe(groupByGenderAndAge())
  .subscribe(
    element => console.log(element),
    error => console.log(error)
  )