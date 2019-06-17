//import add from './add'
import React from 'react'
function Hello(){
    import('./add').then(res=>{
        console.log(res.Add(1,2,3), 'res');
    })
    return <div>hello,xiang</div>
}

export default Hello