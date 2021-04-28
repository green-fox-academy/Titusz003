'use strict'

import {Sum} from "./summer"
import * as test from "tape"

let sum= new Sum(2,3);

test('sum 2 number',t =>{
    t.equal(sum.getSum(),5)
    t.end()
})