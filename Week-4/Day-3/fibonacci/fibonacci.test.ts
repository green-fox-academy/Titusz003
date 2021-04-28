'use strict'

import {fibonacciIndex} from "./fibonacci"
import * as test from "tape"

test('is return the right index',t=>{
    t.equal(fibonacciIndex(12),89)
    t.equal(fibonacciIndex(10),34)
    t.equal(fibonacciIndex(10),34)
    t.end()
})