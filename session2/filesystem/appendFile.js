var fs = require('fs');

fs.appendFile('input.txt','Good Morning....!', function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('Append operation complete.');
    }
});

/* 
fs.appendFileSync('input.txt','Have a good day', function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('Append operation complete.');
    }
});
 */
