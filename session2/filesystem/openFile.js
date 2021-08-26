const fs =require('fs');
fs.open('data.txt','r+',(err,fd)=>{

    if(err){
        console.log(err);
    } else {
    console.log("file opened successfully")
    console.log((fs.readFileSync('data.txt')).toString());
    fs.close(fd, (err)=>{
        if(err){
            console.log("error while opening");
        }
        else{
            console.log('file closed');
    }
    })
}    
})
