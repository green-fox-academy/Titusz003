'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');
​
describe('I am groot', ()=> {
    it('GET/groot return I am groot', ()=>{
        request(app)
        .get("/groot")
        .expect(200)
        .end((err,res) =>{
            console.log(res)
            expect(err).to.be.null
            expect(res.body.error).to.equal("I am groot")

        })
    })
})