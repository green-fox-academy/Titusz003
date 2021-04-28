import {Apple} from "./apples"
import * as test from "tape"

let apple= new Apple

test('return apple',t =>{
    t.equal(apple.getName(),'apple');
    t.end();
})