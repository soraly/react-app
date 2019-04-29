import event from 'events'

class EventEmitter extends event {
    constructor(){
        super();
        this.state = {
            inputVal: '',
            list: []
        }
    }
    getAll(){
        return this.state
    }
    addEventListener(callback){
        this.on('change',callback);
    }
    emitChange(){
        this.emit('change');
    }
    addItemInput(val){
        this.state.inputVal = val;
    }
    addNewTodo(){
        if(!this.getAll().inputVal){
            return
        }
        var list = this.getAll().list;
        list.push({id: list.length+1, name: this.getAll().inputVal, status: 'undone'});
    }
    toggleDone(id){
        this.getAll().list.forEach(one=>{
            if(one.id === id){
                one.status = one.status==='undone'?'done':'undone'
            }
        })
        console.log(this.getAll());
    }
}

export default new EventEmitter()