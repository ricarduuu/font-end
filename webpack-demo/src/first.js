//first.js
import Third from './third'
export class first {
    say() {
        Third('First')
    }
}

export class Second {
    say() {
        console.log('Second')
    }
}