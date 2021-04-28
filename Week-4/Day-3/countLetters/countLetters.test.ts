'use strict'

import {countLetters} from "./countLetters"
import * as test from "tape"

test('is ok',t=>{
    t.deepEqual(countLetters('yoyoka'),{ y: 2, o: 2, k: 1, a: 1 })
    t.end()
})