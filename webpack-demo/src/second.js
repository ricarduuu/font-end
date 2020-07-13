//second.js
import Third from './third'
export default class Second {
    say() {
        Third('Second')
    }
}
const s = new Second();
s.say();