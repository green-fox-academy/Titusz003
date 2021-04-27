'use strict'

import { PrintAllFields } from "./printable"

export class ToDo implements PrintAllFields{
    _task:string
    _priority:string
    _isDone:boolean

    constructor(task:string,priority:string,isDone:boolean){
        this._task=task
        this._priority=priority
        this._isDone=isDone
    }

    printAllFields():void{
        console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._isDone}`)
    }
}