//first.js
import Third from './third'
export default class First {
    say() {
        Third('First')
    }
}
const f = new First();
f.say();