const fs = require('fs');

console.log(__dirname);


// READ FILE 
const read = fs.readFileSync('read_file.txt', 'utf8');
console.log(read);


// WRITE FILE
fs.writeFileSync('write.txt', read, err=> {
    if (err) throw err;
    console.log('The file has beed saved');    
});


//DELETING FILE
/*
fs.unlink('write.txt', err=>{
    if(err) throw err;
    console.log(' The filehas been deleted');
});*/


// DIRECTRY
// fs.mkdirSync('file');
// fs.rmdirSync('file');
fs.mkdir('stuff', () => {
    fs.readFile('read_file.txt', () => {
        fs.writeFile('./stuff/writeme.txt', read, err => console.log(read));
    })
});




//WE CAN NOT REMOVE OR DELETE A DIRECTORY WHICH HAS SOME FILE. TO DELETE THAT WE HAVE TO DELETE THOSE FILE FIRST
//fs.rmdirSync('stuff');
/*fs.unlink('./stuff/writeme.txt',(err,data){
    fs.rmdir('stuff');
})*/





//BUFFER STREAM, READABLE STREAM AND WRITEABLE STREAM
const myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

/*myReadStream.on('data',function(chunk){
    console.log('new chunk receved');
    console.log(chunk);
    myWriteStream.write(chunk);
    
});*/


//myReadStream.pipe(myWriteStream);