process.on('message',function(m){
    console.log('child process',m);
})

process.send({message: 'Hellooo... from child'})