var fs = require('fs');

fs.writeFile('input.txt','Helloooo Folks.............!', function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('Write operation complete.');
    }
});

