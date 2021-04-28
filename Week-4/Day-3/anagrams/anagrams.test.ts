'use strict'

import {anagramCheck} from "./anagrams"
import * as test from "tape"

test('is return boolean',t=>{
    t.equal(anagramCheck('listen','silent'),true)
    t.end()
})