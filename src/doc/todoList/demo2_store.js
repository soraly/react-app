import EventEmitter from 'events'

class MyEmitter extends EventEmitter {
    constructor(){
        super();
        this.itemList = [
            {id:12,name:'xixjf'},
            {id:1,name:'eaedda'},
        ];
    }
}

const myEmitter = new MyEmitter()

export default myEmitter;
