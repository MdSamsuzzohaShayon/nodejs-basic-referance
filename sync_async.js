const fs = require('fs');
//console.log(fs); // GET ALL THE FUNCTION AND PROPERTIES OF FILE SYSTEM JS


//THIS IS ASYNC METHOD
fs.readFile(__dirname+ '/read.txt','utf8',(err,res)=>{
    if(err)throw err;
    console.log(res.toString());
    
});
console.log('File closed');

//SYNC METHOD ALWAYS USE TRY CATCH BLOCK
/* try{
    const data = fs.readFileSync(__dirname +'/read.txt', 'utf8');
    console.log(data.toString());
}catch(e){
    console.log(e);
    
}
console.log("file reloader successfully");
*/