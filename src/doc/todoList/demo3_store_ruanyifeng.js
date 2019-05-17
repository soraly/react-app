import EventEmitter from 'events'

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.nextId = 3;
        this.itemList = [
            { id: 1, name: 'eat dinner',done: true },
            { id: 2, name: 'learn react',done: false },
            { id: 3, name: 'running...',done: true },
        ];
    }
    addChangeListener(callback) {
        this.on('datachange', callback);
    }
    emitChange() {
        this.emit('datachange');
    }
    addTodo(todo) {
        const todos = this.itemList;
        if (!todos || typeof this.itemList.length !== 'number') {
            this.itemList = [];
        }
        todo.id = this.nextId++;
        todo.done = false;
        this.itemList.push(todo);
    }
    deleteTodo(id){
        this.itemList = this.itemList.filter(item=>item.id!==id);
    }
    toggleTodo(item){
        item.done = !item.done;
    }
}

const myEmitter = new MyEmitter()

export default myEmitter;
