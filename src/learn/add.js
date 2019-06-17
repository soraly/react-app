export  function Add(){
    
    return Array.prototype.reduce.call(arguments,(base,cur)=>base+=cur); 
}