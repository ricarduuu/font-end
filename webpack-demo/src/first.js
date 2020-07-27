//first.js
import Third from './third'
class First {
    say() {
        Third('First')
    }
}
export let first = new First()
export class Second {
    say() {
        console.log('Second')
    }
}