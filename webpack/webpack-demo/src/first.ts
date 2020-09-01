//first.js
import Third from './third'
class First {
    say() {
        Third('First')
    }
}
interface firstInter{
    say: object
}
export let first = new First()
export class Second{
    say() {
        console.log('Second')
    }
}