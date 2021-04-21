'use Strict';

export{}

class PostIt{
    backGroundColor: string
    text: string
    textColor: string

    constructor(backGroundColor:string,text:string,textColor:string){
        this.backGroundColor=backGroundColor
        this.text=text
        this.textColor=textColor

    }
}
let postIt1 = new PostIt('orange','Idea 1','blue');
let postIt2= new PostIt('pink','Awesome','black')
let postIt3= new PostIt('yellow','Superb!','green')